﻿define(
   ({
    map: {
      error: "לא ניתן ליצור מפה"
    },
    onlineStatus: {
      offline: "אתה עובד כעת במצב לא מקוון. הגשות טפסים יישמרו באופן מקומי עד ליצירת חיבור לשרת.",
      reconnecting: "מתחבר מחדש&hellip;",
      pending: "${total} שינויי עריכה ממתינים יישלחו כשייווצר שוב חיבור לרשת."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "הארגון שלי",
          onlineLabel: "ArcGIS Online",
          contentLabel: "התוכן שלי",
          favoritesLabel: "המועדפים שלי"
        },
        title: "בחר מפת אינטרנט",
        searchTitle: "חפש",
        ok: "אישור",
        cancel: "ביטול",
        placeholder: "הזן מונח חיפוש"
      },
      groupdlg: {
        items: {
          organizationLabel: "הארגון שלי",
          onlineLabel: "ArcGIS Online",
          contentLabel: "התוכן שלי",
          favoritesLabel: "המועדפים שלי"
        },
        title: "בחר קבוצה",
        searchTitle: "חפש",
        ok: "אישור",
        cancel: "ביטול",
        placeholder: "הזן מונח חיפוש"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "הנה קישור ל-GeoForm"
      }
    },
    user: {
      all: "כן_All__ש",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "כלפי צפון",
      utm_easting: "כלפי מזרח",
      utm_zone_number: "מספר אזור",
      selectLayerTabText: "${formSection} בחר טופס",
      geoFormGeneralTabText: "${formSection} הזן מידע",
      locationInformationText: "${formSection} בחר מיקום",
      submitInformationText: "${formSection} מלא את הטופס",
      submitInstructions: "הוסף מידע זה למפה.",
      myLocationText: "מיקום נוכחי",
      locationDescriptionForMoreThanOneOption: "ציין את המיקום של ערך זה על-ידי לחיצה/הקשה על המפה או באמצעות אחת האפשרויות הבאות.",
      locationDescriptionForOneOption: "ציין את המיקום של ערך זה על-ידי לחיצה/הקשה על המפה או באמצעות האפשרות הבאה.",
      locationDescriptionForNoOption: "ציין את המיקום של ערך זה על-ידי לחיצה/הקשה על המפה.",
      addressText: "חפש",
      geographic: "רוחב/אורך",
      locationTabText: "מיקום",
      locationPopupTitle: "מיקום",
      submitButtonText: "הגש ערך",
      submitButtonTextLoading: "מגיש&hellip;",
      formValidationMessageAlertText: "השדות הבאים נדרשים:",
      selectLocation: "בחר מיקום להגשה.",
      emptylatitudeAlertMessage: "הזן קואורדינטת ${openLink}רוחב${closeLink}.",
      emptylongitudeAlertMessage: "הזן קואורדינטת ${openLink}אורך${closeLink}.",
      shareUserTitleMessage: "תודה על תרומתך!",
      entrySubmitted: "הערך שלך הוגש למפה.",
      shareThisForm: "שתף טופס זה",
      shareUserTextMessage: "הצע לאחרים לתרום באמצעות האפשרויות הבאות.",
      addAttachmentFailedMessage: "לא ניתן להוסיף קובץ לשכבה",
      addFeatureFailedMessage: "לא ניתן להוסיף ישות לשכבה",
      noLayerConfiguredMessage: "אירעה שגיאה בטעינה או באיתור של שכבת ישויות שניתן לערוך. כדי להציג את הטופס ולהתחיל לאסוף הגשות, הוסף למפת האינטרנט שכבת ישויות שניתן לערוך.",
      placeholderLatitude: "רוחב (Y)",
      placeholderLongitude: "אורך (X)",
      latitude: "רוחב",
      longitude: "אורך",
      findMyLocation: "אתר אותי",
      finding: "מאתר&hellip;",
      backToTop: "חזור להתחלה",
      addressSearchText: "ההגשה שלך תופיע כאן. אתה יכול לגרור את הסיכה כדי לתקן את המיקום.",
      shareModalFormText: "קישור לטופס",
      close: "סגור",
      locationNotFound: "לא ניתן למצוא מיקום.",
      setLocation: "קבע מיקום",
      find: "מצא כתובת או מקום",
      attachment: "קובץ מצורף",
      toggleDropdown: "שנה מצב תפריט נפתח",
      invalidString: "הזן ערך חוקי.",
      invalidSmallNumber: "הזן ערך חוקי של ${openStrong}מספר שלם${closeStrong} בין -32768 ל- 32767.",
      invalidNumber: "הזן ערך חוקי של ${openStrong}מספר שלם${closeStrong} בין -2147483648 ל- 2147483647.",
      invalidFloat: "הזן ערך חוקי של ${openStrong}נקודה צפה${closeStrong}.",
      invalidDouble: "הזן ערך חוקי ${openStrong}כפול${closeStrong}.",
      invalidLatLong: "הזן קואורדינטות חוקיות של רוחב ואורך.",
      invalidUTM: "הזן קואורדינטות UTM חוקיות.",
      invalidUSNG: "הזן קואורדינטות USNG חוקיות.",
      invalidMGRS: "הזן קואורדינטות MGRS חוקיות.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "בחר&hellip;",
      applyEditsFailedMessage: "מצטערים, לא ניתן להגיש את הערך שלך. נסה שוב.",
      requiredFields: "יש כמה שגיאות. תקן אותן להלן.",
      requiredField: "(נדרש)",
      error: "שגיאה",
      textRangeHintMessage: "${openStrong}רמז:${closeStrong} ערך מינימום ${minValue} וערך מקסימום ${maxValue}",
      dateRangeHintMessage: "${openStrong}רמז:${closeStrong} תאריך מינימום ${minValue} ותאריך מקסימום ${maxValue}",
      remainingCharactersHintMessage: "${value} תווים נותרו",
      mapFullScreen: "מסך מלא",
      mapRestore: "שחזר",
      filterSelectEmptyText: "בחר",
      invalidLayerMessage: "שכבת טופס לא קיימת. הגדר את האפליקציה וקבע את השכבה.",
      selectedLayerText: "הכל",
      fileUploadStatus: "סטטוס העלאת קובץ",
      uploadingBadge: "&nbsp;מעלה&hellip;",
      successBadge: "&nbsp;הועלה",
      retryBadge: "נסה שוב",
      errorBadge: "שגיאה בהעלאה&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "הקובץ גדול מדי ולא ניתן לצרף אותו",
      exceededFileCountError: "חריגה מהמספר המרבי המותר של קבצים מצורפים",
      selectFileTitle: "בחר קובץ",
      btnSelectFileText: "כן_Select File____ש",
      btnViewSubmissions: "הצג הגשות"
    },
    builder: {
      invalidUser: "מצטערים, איך לך הרשאה לצפייה בפריט זה",
      invalidWebmapSelectionAlert: "מפת האינטרנט שנבחרה אינה מכילה שכבה חוקית לשימוש. הוסף למפת האינטרנט שכבת ישויות שניתן לערוך כדי שתוכל להמשיך.",
      invalidWebmapSelectionAlert2: "לקבלת מידע נוסף, ראה ${openLink}מהו שירות ישויות?${closeLink}",
      selectFieldsText: "בחר שדות טופס",
      selectThemeText: "בחר ערכת נושא לטופס",
      webmapText: "מפת אינטרנט",
      layerText: "שכבה",
      detailsText: "פרטים",
      fieldsText: "שדות",
      styleText: "סגנון",
      optionText: "אפשרויות",
      previewText: "תצוגה מקדימה",
      publishText: "פרסם",
      optionsApplicationText: "אפשרויות",
      titleText: "אשף בנייה",
      descriptionText: "GeoForm היא תבנית ניתנת להגדרה עבור עריכת נתונים מבוססת-טופס של ${link1}שירות ישויות${closeLink}. אפליקציה זו מאפשרת למשתמשים להזין נתונים דרך טופס במקום דרך חלון מוקפץ של מפה, תוך ניצול העוצמה של ${link2}מפת האינטרנט${closeLink} ושירותי הישויות הניתנים לעריכה. בצע את הפעולות הבאות כדי להתאים אישית ולפרוס את ה-GeoForm.",
      btnPreviousText: "הקודם",
      btnNextText: "הבא",
      webmapTabTitleText: "בחר מפת אינטרנט",
      viewWebmap: "הצג מפת אינטרנט",
      webmapDetailsText: "מפת האינטרנט שנבחרה היא ${webMapTitleLink}${webMapTitle}${closeLink}. כדי לבחור מפת אינטרנט אחרת, לחץ על לחצן \'בחר מפת אינטרנט\'",
      btnSelectWebmapText: "בחר מפת אינטרנט",
      btnSelectWebmapTextLoading: "טוען&hellip;",
      layerTabTitleText: "בחר שכבה ניתנת לעריכה",
      selectLayerLabelText: "שכבה",
      selectLayerDefaultOptionText: "בחר שכבה",
      enableBasemapToggle: "כן_Show Basemap Toggle_______ש",
      enableBasemapToggleDescription: "כן_You can configure the GeoForm to Show/Hide the Basemap Toggle___________________ש",
      defaultBasemap: "שנה מצב מפת בסיס",
      secondaryBasemap: "מפת בסיס המהווה ברירת מחדל",
      detailsTabTitleText: "פרטי טופס",
      detailTitleLabelText: "כותרת",
      detailLogoLabelText: "תמונת לוגו",
      descriptionLabelText: "הוראות ופרטי טופס",
      fieldDescriptionLabelText: "טקסט עזרה (אופציונלי)",
      fieldTabFieldHeaderText: "שדה",
      fieldTabLabelHeaderText: "תווית",
      fieldTabDisplayTypeHeaderText: "הצג כ:",
      fieldTabOrderColumnText: "סדר",
      fieldTabVisibleColumnText: "מופעל",
      displayFieldText: "שדה תצוגה",
      selectMenuOption: "בחר תפריט",
      selectRadioOption: "לחצן אפשרות",
      selectTextOption: "טקסט",
      selectDateOption: "בורר תאריכים",
      selectRangeOption: "גלגלת מגע",
      selectCheckboxOption: "תיבת סימון",
      selectMailOption: "דוא\"ל",
      selectUrlOption: "URL",
      selectTextAreaOption: "אזור טקסט",
      previewApplicationText: "תצוגה מקדימה של אפליקציה",
      saveApplicationText: "שמור אפליקציה",
      saveText: "שמור",
      toggleNavigationText: "החלף מצב ניווט",
      formPlaceholderText: "הטופס שלי",
      shareBuilderInProgressTitleMessage: "פרסום GeoForm",
      shareBuilderProgressBarMessage: "המתן בבקשה&hellip;",
      shareBuilderTitleMessage: "הפריט נשמר בהצלחה!",
      shareBuilderTextMessage: "אתה יכול להתחיל לאסוף מידע על-ידי שיתוף עם אחרים",
      shareModalFormText: "קישור לטופס",
      shareBuilderSuccess: "ה-GeoForm שלך עודכן ופורסם!",
      geoformTitleText: "Geo Form",
      layerTabText: "ה-GeoForm ייבנה מתוך שכבה זו. השכבה חייבת להיות שירות ישויות ניתן לעריכה עם הרשאות שיתוף מתאימות לקהל שלך.",
      detailsTabText: "השתמש בתיבות פרטי הטופס למטה כדי להתאים אישית את הכותרת, להוסיף לוגו מותאם אישית ולספק תיאור קצר לקהל ה-GeoForm שלך. בתיאור זה ניתן להוסיף קישורים למשאבים אחרים, פרטי התקשרות ואפילו להפנות את הקהל שלך לאפליקציית מיפוי אינטרנט הכוללת את כל הנתונים שנאספו באמצעות ה-GeoForm.",
      fieldsTabText: "כאן אתה יכול לבחור אילו שדות יהיו גלויים בפני קהל ה-GeoForm שלך, לערוך את התוויות שהקהל יראה ולהוסיף תיאור קצר שיעזור בהזנת הנתונים.",
      styleTabText: "סגנן את ה-GeoForm באמצעות ערכות הנושא המופיעות למטה בהתאם להעדפותיך.",
      publishTabText: "אם סיימת להתאים אישית את ה-GeoForm, שמור את האפליקציה והתחל לשתף עם הקהל שלך. תוכל תמיד לחזור לאשף בנייה זה ולהמשיך בהתאמה אישית לפי המשוב שתקבל.",
      headerSizeLabel: "גודל כותרת",
      smallHeader: "השתמש בכותרת קטנה",
      bigHeader: "השתמש בכותרת גדולה",
      pushpinText: "נעץ",
      doneButtonText: "שמור וצא",
      fieldTabPlaceHolderHeaderText: "רמז (אופציונלי)",
      enableAttachmentLabelText: "${openStrong}אפשר קבצים מצורפים${closeStrong}",
      enableAttachmentLabelHint: "תוכל לאפשר/לבטל את הקבצים המצורפים כאן",
      attachmentIsRequiredLabelText: "${openStrong}נדרש קובץ מצורף${closeStrong}",
      attachmentIsRequiredLabelHint: "במידת הצורך, ניתן לדרוש מהמשתמשים להזין קובץ מצורף.",
      attachmentLabelText: "תווית לחצן קובץ מצורף",
      attachmentLabelHint: "טקסט זה יופיע לצד לחצן צירוף הקבצים. תוכל להשתמש במקום זה כדי לתאר את סוג הקובץ שאתה רוצה שהקהל יצרף (תמונה, סרטון, מסמך וכן הלאה), את תבנית הקובץ המבוקשת (‎.jpeg‏, ‎.png‏, ‎.docx‏, ‎.pdf וכו) והוראות נוספות.",
      attachmentDescription: "תיאור קובץ מצורף",
      attachmentHint: "במקרה הצורך, תוכל לספק כאן הוראות נוספות לגבי קבצים מצורפים.",
      jumbotronDescription: "השתמש בכותרת גדולה או קטנה עבור הטופס. כותרת גדולה יכולה לעזור להגדיר את מטרת האפליקציה, אך היא תופסת יותר מקום על המסך.",
      shareGeoformText: "שתף את ה-Geoform",
      shareDescription: "חלונית השיתוף מאפשרת לקהל שלך לשתף בקלות את ה-GeoForm עם אחרים לאחר שהם הגישו - ניתן להשבית אפשרות זו בכל עת.",
      defaultMapExtent: "תיחום ברירת המחדל של המפה",
      defaultMapExtentDescription: "המפה תתאפס לתיחום ברירת המחדל ב-web map שלך לאחר ההגשה - ניתן להשבית אפשרות זו בכל עת.",
      pushpinOptionsDescription: "בחר צבע מתוך מגוון צבעים עבור הנעץ במפה, הוא צריך להיות שונה מהסימבולוגיה של המפה כדי לעזור למשתמש להציב את ההגשה שלו על המפה",
      selectLocationText: "בחר מיקום לפי",
      myLocationText: "המיקום שלי",
      searchText: "חפש",
      coordinatesText: "קואורדינטות רוחב ואורך",
      usng: "קואורדינטות USNG",
      mgrs: "קואורדינטות MGRS",
      utm: "קואורדינטות UTM",
      selectLocationSDescription: "אפשר למשתמשים לבחור מיקום באמצעות שיטות אלה.",
      dragTooltipText: "גרור את השדה למקום שבו אתה רוצה שהוא יופיע",
      showHideLayerText: "הצג שכבה",
      showHideLayerHelpText: "אתה יכול להגדיר את ה-GeoForm להציג/להסתיר שכבה. אפשרות זו חלה רק על מצב של שכבה בודדת.",
      labelHelpMessage: "תווית",
      placeHolderHintMessage: "טקסט רמז",
      placeHolderHelpMessage: "טקסט עזרה",
      selectTextOptionValue: "בחירת מסנן",
      disableLogo: "בטל לוגו",
      disableLogoDescription: "אתה יכול להגדיר את ה-GeoForm להציג/להסתיר את הלוגו בכותרת הטופס",
      locateOnLoadText: "אתר בעת הטעינה",
      locateOnLoadDescription: "אתה יכול להגדיר את ה-GeoForm להשתמש במיקום הנוכחי בעת טעינת הדף",
      selectLayerFieldTabText: "בחר שכבה",
      allLayerSelectOptionText: "הכל",
      disableViewer: "השבת צפיין",
      disableViewerDescription: "אתה יכול להגדיר את ה-GeoForm להשבית/להפעיל את הצפיין",
      displayFieldHintText: "כן_Selected display field will be shown in the viewer as a title___________________ש"
    },
    viewer: {
      geocoderCancelText: "ביטול",
      viewReportsTabText: "הגשות",
      viewLegendTabText: "מקרא",
      viewAboutusTabText: "אודות",
      viewMapTabText: "מפה",
      sortHeaderText: "מיין לפי:",
      btnSubmitReportText: "הגש דוח",
      geocoderPlaceholderText: "מיקוד, עיר וכו\'",
      noSearchResult: "לא נמצאה תוצאה",
      recordsTabTooltip: "הצג הגשות",
      legendTabTooltip: "מקרא",
      aboutUsTabTooltip: "אודותינו",
      mapTabTooltip: "מפה",
      appLoadingFailedMessage: "מצב הצפיין אינו זמין",
      btnDescendingText: "יורד",
      btnAscendingText: "עולה",
      geometryUnavailableErrorMessage: "לא ניתן למצוא את הגיאומטריה של הישות",
      infoPopupOffErrorMessage: "InfoPopup כבוי",
      btnLoadMoreText: "טען עוד",
      unavailableTitleText: "ללא שם",
      unavailableConfigMessage: "לא ניתן לטעון תצורה"
    }
  })
);