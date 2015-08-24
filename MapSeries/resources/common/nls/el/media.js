﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Πολυμέσα",
				lblSelect2: "Περιεχόμενο",
				lblMap: "Χάρτης",
				lblImage: "Εικόνα",
				lblVideo: "Βίντεο",
				lblExternal: "Ιστοσελίδα",
				disabled: "Αυτή η λειτουργία έχει απενεργοποιηθεί από το Διαχειριστή",
				url: "Για να εισαγάγετε χειροκίνητα τη web διεύθυνση  μιας εικόνας",
				userLookup: "Φόρτωση άλμπουμ",
				notImplemented: "Δεν εφαρμόζεται ακόμη.",
				noData: "Δεν βρέθηκε δημόσιο άλμπουμ"
			},
			imageSelector: {
				lblStep1: "Επιλογή της υπηρεσίας",
				lblStep2: "Επιλογή των πολυμέσων σας",
				lblStep3: "Διαμόρφωση"
			},
			imageSelectorHome: {
				explain: "Φορτώστε εικόνες από μέσα κοινωνικής δικτύωσης <br /> ή απευθείας από ένα URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Όνομα χρήστη",
				signInMsg2: "Ο χρήστης δεν βρέθηκε",
				loadingFailed: "Η φόρτωση απέτυχε"
			},
			imageSelectorFacebook: {
				leftHeader: "Χρήστης Facebook",
				rightHeader: "Σελίδα Facebook",
				pageExplain: "Μια Facebook σελίδα είναι μια εμπορική επωνυμία, ένα προϊόν ή μια διασημότητα, π.χ. <b>esrigis</b>. Το όνομα της σελίδας βρίσκεται μετά το πρώτο '/' στο URL της σελίδας.",
				pageInputLbl: "Όνομα σελίδας",
				lookupMsgError: "Η σελίδα δεν βρέθηκε"
			},
			imageSelectorPicasa: {
				userInputLbl: "Email ή Picasa/Google+ ID",
				signInMsg2: "Ο λογαριασμός δεν βρέθηκε",
				howToFind: "Πώς να βρείτε ένα ID λογαριασμού στο Picasa ή στο Google+",
				howToFind2: "Αντιγράψτε τα ψηφία ανάμεσα στο πρώτο και το δεύτερο '/' οποιασδήποτε σελίδας Picasa ή G+"
			},
			videoSelectorCommon: {
				check: "Έλεγχος",
				notFound: "Το βίντεο δεν βρέθηκε",
				found: "Το βίντεο βρέθηκε",
				select: "Επιλογή αυτού του βίντεο"
			},
			videoSelectorHome: {
				other: "Άλλο"
			},
			videoSelectorYoutube: {
				url: "URL ενός YouTube βίντεο",
				pageInputLbl: "Όνομα χρήστη",
				lookupMsgError: "Ο χρήστης δεν βρέθηκε",
				howToFind: "Πώς να βρείτε ένα όνομα χρήστη του YouTube",
				howToFind2: "Το όνομα χρήστη εμφανίζεται κάτω από τα βίντεο",
				found: "Βρέθηκαν",
				noData: "Δεν βρέθηκαν δημόσια βίντεο",
				videoNotChecked: "Đ_The video hasn't been checked on YouTube but its address looks good_____________________ớ.",
				checkFailedAPI: "Đ_YouTube check has failed, please check YouTube API key__________________ớ."
			},
			videoSelectorVimeo: {
				url: "URL ενός Vimeo βίντεο"
			},
			videoSelectorOther: {
				explain1: "Η εφαρμογή δεν έχει δυνατότητα αναπαραγωγής μη επεξεργασμένων βίντεο (π.χ. avi, mpeg), αλλά μπορεί να αναπαράγει φιλοξενούμενα αρχεία βίντεο που έχουν ενσωματωμένα προγράμματα αναπαραγωγής (π.χ. YouTube ή Vimeo).",
				explain2: "Οι περισσότερες online υπηρεσίες φιλοξενίας βίντεο προσφέρουν αυτή τη δυνατότητα. Θα πρέπει να βρείτε την επιλογή για ενσωμάτωση του βίντεο, να αντιγράψετε τον κώδικα που παρέχεται και να χρησιμοποιήσετε το %WEBPAGE%.",
				explain3: "Εναλλακτικά, εάν θέλετε να φιλοξενήσετε εσείς το βίντεο, μπορείτε να δημιουργήσετε μια HTML σελίδα που χρησιμοποιεί ένα πρόγραμμα αναπαραγωγής βίντεο όπως το %EXAMPLE%, να φιλοξενήσετε τη σελίδα αυτή και να χρησιμοποιήσετε επίσης το %WEBPAGE%.",
				webpage: "Στοιχείο ιστοσελίδας"
			},
			webpageSelectorHome: {
				lblUrl: "URL ιστοσελίδας",
				lblEmbed: "Ενσωμάτωση κώδικα",
				lblOR: "Ή",
				lblError1: "Σφάλμα, καθαρίστε ένα από τα δύο πεδία εισόδου.",
				lblError2: "Ο κώδικας ενσωμάτωσης μπορεί να περιέχει μόνο ένα %IFRAMETAG%",
				configure: "Διαμόρφωση"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Το URL μιας εικόνας πρέπει να αρχίζει με http:// και να τελειώνει σε .jpg ή .png",
				lblURLError: "Η εικόνα αυτή δεν φαίνεται να είναι έγκυρη. Καθορίστε έναν απευθείας σύνδεσμο σε ένα αρχείο εικόνας (το URL θα τελειώνει συνήθως σε .jpg ή .png). Οι συνδέσμοι σε μια ιστοσελίδα που περιέχει μια εικόνα δεν λειτουργούν.",
				lblURLCheck: "Έλεγχος εικόνας...",
				lblLabel: "Λεζάντα εικόνας",
				lblLabel1: "Λεζάντα",
				lblLabel2: "Κείμενο κατάδειξης",
				lblLabel3: "Κανένα",
				lblLabelPH: "Εισαγάγετε κείμενο...",
				lblMaximize: "Τοποθέτηση κουμπιού μεγιστοποίησης στη γωνία της εικόνας",
				lblMaximizeHelp: "Συνιστάται μόνο για φωτογραφίες υψηλής ποιότητας",
				lblPosition: "Θέση",
				lblPosition1: "Κέντρο",
				lblPosition2: "Γέμισμα",
				lblPosition3: "Προσαρμογή",
				lblPosition4: "Επέκταση",
				lblPosition5: "Προσαρμοσμένο",
				tooltipDimension: "Η τιμή μπορεί να καθοριστεί σε 'px' ή '%'",
				tooltipDimension2: "Η τιμή πρέπει να καθοριστεί σε 'px'",
				lblPosition2Explain: "(μπορεί να περικοπεί)",
				lblPosition3Explain: "(δεν θα περικοπεί)",
				lblPosition3Explain2: "(το πλάτος θα προσαρμόζεται πάντα στο πλαίσιο)",
				lblPosition4Explain: "(μπορεί να παραμορφωθεί)",
				unloadLbl: "Κατάργηση φόρτωσης όταν ο αναγνώστης απομακρύνεται",
				unloadHelp: "Εάν η ιστοσελίδα έχει πολυμέσα ήχου ή βίντεο, αφήστε ενεργοποιημένη αυτή την επιλογή για να σταματάει η αναπαραγωγή αυτού του περιεχομένου όταν ο αναγνώστης απομακρύνεται. Καταργήστε τη για να συνεχίζει, για παράδειγμα, η αναπαραγωγή μιας μουσικής υπόκρουσης καθώς ο αναγνώστης προχωράει στην αφήγηση.<br />Εάν η ιστοσελίδα είναι μια εφαρμογή, καταργήστε αυτή την επιλογή, ώστε η εφαρμογή να μην φορτώνεται ξανά όταν ο αναγνώστης επιστρέφει σε αυτή."
			},
			editorActionGeocode: {
				lblTitle: "Εντοπίστε μια διεύθυνση ή ένα μέρος",
				mapMarkerExplain: "Ο χρήστης θα βλέπει έναν δείκτη χάρτη όταν κάνει κλικ στο σύνδεσμο"
			},
			editorActionMedia: {
				lblTitle: "Αλλαγή του περιεχομένου της κεντρικής σκηνής"
			},
			editorInlineMedia: {
				lblTitle: "Εισαγάγετε μια εικόνα, ένα βίντεο ή μια ιστοσελίδα"
			}
		}
	})
);
