﻿/*global define,dojo,alert,dojoConfig,LeftPanelCollection */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "esri/arcgis/Portal",
    "dojo/topic",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojo/i18n!nls/localizedStrings",
    "dojo/query",
    "dojo/on",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-geometry",
    "esri/request",
    "esri/arcgis/utils",
    "esri/urlUtils",
    "widgets/leftPanel/leftPanel"
], function (declare, _WidgetBase, portal, topic, lang, Deferred, nls, query, on, domAttr, domClass, domStyle, domGeom, esriRequest, arcgisUtils, urlUtils) {

    return declare([_WidgetBase], {
        nls: nls,

        postCreate: function () {
            topic.subscribe("portalSignIn", lang.hitch(this, this.portalSignIn));
        },

        initializePortal: function () {
            // query to check access type of the group
            esriRequest({
                // group rest URL
                url: dojo.configData.ApplicationSettings.portalURL + '/sharing/rest/community/groups?q=' + dojo.configData.ApplicationSettings.group,
                content: {
                    'f': 'json'
                },
                callbackParamName: 'callback',
                load: lang.hitch(this, function (response) {
                    if (response.results.length > 0) {
                        // executed if group is public
                        dojo.isPrivateGroup = false;
                        this.createPortal().then(lang.hitch(this, function () {
                            this.queryGroup().then(lang.hitch(this, function () {
                                topic.subscribe("queryGroupItem", dojo.hitch(this._portal, this.queryGroupForItems));
                                topic.subscribe("queryItemInfo", dojo.hitch(this._portal, this.queryItemInfo));
                                var leftPanelObj = new LeftPanelCollection();
                                leftPanelObj.startup();
                            }));
                        }));
                    } else {
                        // executed if group is private
                        dojo.isPrivateGroup = true;
                        this.createPortal().then(lang.hitch(this, function () {
                            topic.subscribe("queryGroupItem", dojo.hitch(this._portal, this.queryGroupForItems));
                            topic.subscribe("queryItemInfo", dojo.hitch(this._portal, this.queryItemInfo));
                            var leftPanelObj = new LeftPanelCollection();
                            leftPanelObj.startup();
                        }));
                    }
                }),
                error: function (response) {
                    alert(response.message);
                    topic.publish("hideProgressIndicator");
                }
            });
        },

        fetchAppIdSettings: function () {
            var def = new Deferred(), settings;

            settings = urlUtils.urlToObject(window.location.href);
            lang.mixin(dojo.configData.ApplicationSettings, settings.query);
            if (dojo.configData.ApplicationSettings.appid) {
                arcgisUtils.getItem(dojo.configData.ApplicationSettings.appid).then(lang.hitch(this, function (response) {
                    /**
                    * check for false value strings
                    */
                    var appSettings = this.setFalseValues(response.itemData.values);
                    // set other config options from app id
                    lang.mixin(dojo.configData.ApplicationSettings, appSettings);
                    def.resolve();
                    /**
                    * on error
                    */
                }), function (error) {
                    alert(error.message);
                    def.resolve();
                });
            } else {
                def.resolve();
            }
            return def;
        },

        setFalseValues: function (obj) {
            var key;

            /**
            * for each key
            */
            for (key in obj) {
                /**
                * if not a prototype
                */
                if (obj.hasOwnProperty(key)) {
                    /**
                    * if is a false value string
                    */
                    if (typeof obj[key] === 'string' && (obj[key].toLowerCase() === 'false' || obj[key].toLowerCase() === 'null' || obj[key].toLowerCase() === 'undefined')) {
                        // set to false bool type
                        obj[key] = false;
                    }
                }
            }
            /**
            * return object
            * @param {object} obj
            */
            return obj;
        },

        createPortal: function () {
            var def = new Deferred();
            /**
            * create portal
            */
            this._portal = new portal.Portal(dojo.configData.ApplicationSettings.portalURL);
            /**
            * portal loaded
            */
            this.own(on(this._portal, "Load", function () {
                def.resolve();
            }));
            return def;
        },

        queryGroup: function () {
            var _self = this, def = new Deferred();
            /**
            * query group info
            */
            _self.queryAGOLGroupInfo({
                /**
                * Settings
                */
                id_group: dojo.configData.ApplicationSettings.group
            }).then(function (data) {
                if (data) {
                    if (data.results.length > 0) {
                        /**
                        * set group content
                        */
                        _self.setGroupContent(data.results[0]);
                        def.resolve();
                    } else {
                        alert(nls.errorMessages.emptyGroup);
                        def.resolve();
                    }
                } else {
                    def.resolve();
                }
            });
            return def;
        },

        setGroupContent: function (groupInfo) {
            /**
            * set group id
            */
            if (!dojo.configData.group) {
                dojo.configData.group = groupInfo.id;
            }
            /**
            * Set group title
            */
            if (!dojo.configData.groupTitle) {
                dojo.configData.groupTitle = groupInfo.title || "";
            }
            /**
            * Set group description
            */
            if (!dojo.configData.ApplicationSettings.groupDescription) {
                dojo.configData.ApplicationSettings.groupDescription = groupInfo.description || "";
            }
            /**
            * Set group logo image
            */
            if (!dojo.configData.groupIcon) {
                dojo.configData.groupIcon = groupInfo.thumbnailUrl || dojoConfig.baseURL + "/themes/images/groupNoImage.png";
            }
        },

        /*------------------------------------*/
        // query arcgis group info
        /*------------------------------------*/
        queryAGOLGroupInfo: function (obj) {
            var _self = this, def = new Deferred(), settings;

            /**
            * default values
            */
            settings = {
                // set group id for web maps
                id_group: '',
                // format
                dataType: 'json'
            };
            /**
            * If options exist, lets merge them with our default settings
            */
            if (obj) {
                lang.mixin(settings, obj);
            }
            /**
            * first, request the group to see if it's public or private
            */
            esriRequest({
                // group rest URL
                url: dojo.configData.ApplicationSettings.portalURL + '/sharing/rest/community/groups/' + settings.id_group,
                content: {
                    'f': settings.dataType
                },
                callbackParamName: 'callback',
                load: function (response) {
                    var q, params;

                    // query
                    q = 'id:"' + settings.id_group + '"';
                    params = {
                        q: q,
                        f: settings.dataType
                    };
                    _self._portal.queryGroups(params).then(function (data) {
                        def.resolve(data);
                    });
                },
                error: function (response) {
                    alert(response.message);
                    topic.publish("hideProgressIndicator");
                    def.resolve();
                }
            });
            return def;
        },

        queryGroupForItems: function (queryString, sortfields, sortorder, deferedObj, nextQuery) {
            var params;
            if (!nextQuery) {
                params = {
                    q: queryString,
                    num: 100, //should be in number format ex: 100
                    sortField: sortfields, //should be in string format
                    sortOrder: sortorder //should be in string format
                };
            } else {
                params = nextQuery;
            }
            this.queryItems(params).then(function (data) {
                deferedObj.resolve(data);
            });
            return deferedObj;
        },

        queryItemInfo: function (itemUrl, defObj) {
            esriRequest({
                url: itemUrl,
                callbackParamName: "callback",
                timeout: 20000,
                load: function (data) {
                    defObj.resolve(data);
                },
                error: function (e) {
                    defObj.resolve();
                    alert(e.message);
                    topic.publish("hideProgressIndicator");
                }
            });
            return defObj;
        },

        setSignInContainerText: function () {
            var _self = this;
            setTimeout(function () {
                if (query(".dijitDialogTitle")[0]) {
                    query(".dijitDialogTitle")[0].innerHTML = nls.signInText;
                }
                if (query(".dijitDialogPaneContentArea")[0]) {
                    query(".dijitDialogPaneContentArea")[0].childNodes[0].innerHTML = "";
                    domStyle.set(query(".dijitDialogPaneContentArea")[0].childNodes[1], "height", "0px");
                }
                if (query(".esriIdSubmit")[0]) {
                    _self.own(on(query(".esriIdSubmit")[0], "click", lang.hitch(this, function () {
                        if (lang.trim(query(".dijitInputInner")[0].value) === "" && lang.trim(query(".dijitInputInner")[1].value) === "") {
                            domAttr.set(query(".esriErrorMsg")[0], "innerHTML", nls.errorMessages.emptyUsernamePassword);
                            domStyle.set(query(".esriErrorMsg")[0], "display", "block");
                        }
                    })));
                }
            }, 1000);
        },

        portalSignIn: function (def) {
            var _self = this;
            if (!def) {
                def = new Deferred();
            }
            if (query(".signin")[0]) {
                if (query(".signin")[0].innerHTML === nls.signInText) {
                    _self._portal.signIn().then(function (loggedInUser) {
                        topic.publish("showProgressIndicator");
                        if (loggedInUser) {
                            if (!dojo.configData.ApplicationSettings.token) {
                                dojo.configData.ApplicationSettings.token = loggedInUser.credential.token;
                            }
                            _self.queryGroup().then(lang.hitch(this, function () {
                                var leftPanelObj = new LeftPanelCollection();
                                leftPanelObj.startup();
                            }));
                            domAttr.set(query(".signin")[0], "innerHTML", nls.signOutText);
                            domClass.replace(query(".esriCTSignInIcon")[0], "icon-logout", "icon-login");
                            _self.globalUser = loggedInUser;
                            def.resolve();
                        }
                    });
                } else {
                    _self._portal.signOut().then(function () {
                        if (dojo.configData.ApplicationSettings.token) {
                            dojo.configData.ApplicationSettings.token = null;
                        }
                        domAttr.set(query(".signin")[0], "innerHTML", nls.signInText);
                        domClass.replace(query(".esriCTSignInIcon")[0], "icon-login", "icon-logout");
                        _self.globalUser = null;
                        /**
                        * query to check if the group has any public items to be displayed on sign out
                        */
                        var queryString = 'group:("' + dojo.configData.ApplicationSettings.group + '")' + ' AND (access: ("' + "public" + '"))';
                        topic.publish("queryGroupItems", null, queryString);
                        def.resolve();
                    });
                }
            } else {
                _self._portal.signIn().then(function (loggedInUser) {
                    topic.publish("showProgressIndicator");
                    if (loggedInUser) {
                        if (!dojo.configData.ApplicationSettings.token) {
                            dojo.configData.ApplicationSettings.token = loggedInUser.credential.token;
                        }
                        _self.globalUser = loggedInUser;
                        def.resolve();
                    }
                });
            }
            topic.publish("setDefaultTextboxValue");
            if (domGeom.position(query(".esriCTAutoSuggest")[0]).h > 0) {
                domClass.replace(query(".esriCTAutoSuggest")[0], "displayNoneAll", "displayBlockAll");
            }
            this.setSignInContainerText();
            return def;
        }
    });
});