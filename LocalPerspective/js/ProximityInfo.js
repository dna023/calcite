define([
        'dojo/Evented',
        'dojo/_base/declare',
        'dojo/_base/array',
        'dojo/_base/lang',
        'dojo/_base/Color',
        'dojo/dom', 
        'dojo/dom-class',
        'dojo/dom-construct',
        'dojo/dom-style', 
        'dojo/number',
        'dojo/on',
        'esri/geometry/mathUtils',
        'esri/graphic',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleLineSymbol',
        'esri/symbols/Font',
        'esri/symbols/TextSymbol',
        'esri/tasks/query',
        'esri/tasks/QueryTask'
	],function(
	     Evented,
        declare, 
        array, 
        lang, 
        Color,
        dom, 
        domClass, 
        domConstruct, 
        domStyle, 
        number,
        on,
        mathUtils,
        Graphic,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        Font,
        TextSymbol,
        Query,
        QueryTask
){
		
   var proximityInfo = declare('ProximityInfo', [Evented], {
       
      config : null,
      map : null,
      fields : [],
      infoTemplate : null,
      location : null,
      bufferDist : null,
      container : null,
      pageObj : null,
	
      constructor: function(config) {
         this.config = config;
      },
    		
      // update for location
      updateForLocation: function(location, bufferDist, container, pageObj) {
         this.location = location;
         this.bufferDist = bufferDist;
         this.container = container;
         this.container.innerHTML = "<br/><br/><img src='images/ajax-loader.gif'/>";
         this.pageObj = pageObj;
         
         var layer = pageObj.layer;
         var layerType = pageObj.layerType;
         this.fields = this.getFields(layer);
         this.infoTemplate = layer.infoTemplate;
         
         if (layerType == "Feature Layer") {
            this.queryFeatures();
         } else {
            this.filterFeatures();
         }
       },
       
      // query features
      queryFeatures : function() {
         var layer = this.pageObj.layer;
         var query = new Query();
         //query.units = "miles";
         //query.distance = this.bufferDist;
         query.returnGeometry = true;
         //query.geometry = this.location;
         query.geometry = this.pageObj.buffer;
         var me = this;
         layer.queryFeatures(query, lang.hitch(me, me.resultsHandler), lang.hitch(me, me.errorHandler));
      },
       
      // filter features
      filterFeatures : function() {
         var buffer = this.pageObj.buffer;
         var layer = this.pageObj.layer;
         var features = [];
         for (var i=0; i<layer.graphics.length; i++) {
            var gra = layer.graphics[i];
            var geom = gra.geometry;
            var loc = geom;
            if (geom.type != "point") 
               loc = geom.getExtent().getCenter();
            if (buffer.contains(loc)) {
               features.push(gra);
            }
          }
          this.resultsHandler({features: features});
      },
        	
    		    
      // results handler
      resultsHandler: function(results) {
         
         this.container.innerHTML = "";
         
         var proximityFeatures = [];
         var features = results.features;
         if (features.length > 0) {
            
            // process features
            for (var i=0; i<features.length; i++) {
               var gra = features[i];
               var geom = gra.geometry;
               var loc = geom;
               if (geom.type != "point") 
                      loc = geom.getExtent().getCenter();
                  var dist = this.getDistance(loc);
                  var newAttr = {DISTANCE: dist};
                  for (var f=0; f<this.fields.length; f++ ) {
                      newAttr[this.fields[f]] = gra.attributes[this.fields[f]];
                  }
                  gra.attributes = newAttr;
                  gra.setInfoTemplate(this.infoTemplate);
                  proximityFeatures.push(gra);
            }
            
            // sort by distance
            proximityFeatures.sort(this.compareDistance);
            
            // create content
            var content = domConstruct.create("div", {
                 class: "resultsContent"
            }, this.container);
             
            for (var i=0; i<proximityFeatures.length; i++) {
               var feature = proximityFeatures[i];
               var geom = feature.geometry;
               var dist = feature.attributes.DISTANCE;
               var loc = geom;
               if (geom.type != "point")
                  loc = geom.getExtent().getCenter();
               var num = i+1;
               
               var rec = domConstruct.create("div", {
                  class: "recProximity"
               }, content);
               var recLeftNum = domConstruct.create("div", {
                  class: "recLeftNum"
               }, rec);
               var recNum = domConstruct.create("div", {
                  class: "recNum",
                  style: "background-color:" + this.pageObj.color,
                  innerHTML: num
               }, recLeftNum);
               on(recNum, "click", lang.hitch(this, this.zoomToLocation, loc));
               var recInfo = domConstruct.create("div", {
                  class: "recInfo"
               }, rec);
               var recDistance = domConstruct.create("span", {
                  class: "recDistance",
                  innerHTML: "<img src='images/car.png' /> " + Math.round(dist*100)/100 + " Miles<br/>"
               }, recInfo);
               on(recDistance, "click", lang.hitch(this, this.routeToLocation, loc));
               var recInfoText = domConstruct.create("span", {
                  innerHTML: this.getInfo(feature)
               }, recInfo);
               
            }
            
         }
         dom.byId("pageCounter_"+this.pageObj.id).innerHTML = proximityFeatures.length;
         this.emit('updated', {data: proximityFeatures});
      },
    
      // error handler
      errorHandler: function(error) {
         this.container.innerHTML = "";
         var div = domConstruct.create("div", {
             innerHTML: error.message
         }, this.container);
         this.emit('updated', {data: null});
      },
      
      // getFields
      getFields: function(layer) {
         var fields = [];
         if(layer.infoTemplate) {
            var fldInfos = layer.infoTemplate.info.fieldInfos;
            for (var i=0; i<fldInfos.length; i++) {
                var fld = fldInfos[i];
                if (fld.visible)
                    fields.push(fld.fieldName);
            }
         } else {
            var fldTypes = "esriFieldTypeSmallInteger,esriFieldTypeInteger,esriFieldTypeSingle,esriFieldTypeDouble,esriFieldTypeString";
            for (var i=0; i<layer.fields.length; i++) {
               var fld = layer.fields[i];
               var type = fld.type;
               if (fldTypes.indexOf(type) > -1) {
                  fields.push[fld];
               }
            }
         }
         return fields;
      },
      
      // get info
      getInfo : function(gra) {
         var attr = gra.attributes;
         var dist = attr.DISTANCE;
         var info = "";
         var c = 0;
         for (var prop in attr) {
              if (prop != "DISTANCE" && c < 3) {
                  info += attr[prop] + "<br/>";
                  c += 1;
              }
         }
         return info;
      },
        
      // get distance
      getDistance: function(loc) {
         var dist = 0;
         dist = mathUtils.getLength(this.location, loc) * 0.000621371;
         return dist;
      },
      
      // zoom to location
      zoomToLocation: function(loc) {
         this.map.centerAndZoom(loc, this.config.defaultZoomLevel || 14);
      },
      
      // route to location
      routeToLocation : function(loc) {
         if (this.config.showDirections)
            this.emit('route', {data: loc});
      },
  
      // compare distance
      compareDistance: function(a,b) {
         if (a.attributes.DISTANCE < b.attributes.DISTANCE)
             return -1;
         if (a.attributes.DISTANCE > b.attributes.DISTANCE)
             return 1;
         return 0;
      }
		    
	});
	
	return proximityInfo;
	
});