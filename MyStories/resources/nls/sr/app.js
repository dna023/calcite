﻿define(
	 ({
		header: {
			start: "pokretanje",
			searchStories: "Pretražite vaše priče...",
			filter: "Filter",
			sort: "Sortiraj",
			sortColon: "Sortiraj:",
			numResults: "Rezultati: {{NUM_RESULTS}}",
			sortBy: "Sortiraj po",
			dateModified: "Datum izmene",
			title: "Naslov",
			type: "Tip",
			views: "Prikazi",
			errors: "Greške",
			filterBy: "Filtriraj po",
			filterItems: "Stavke za filtriranje",
			apps: "Aplikacije",
			sharing: "Deljenje",
			clearAll: "Izbriši sve",
			clearSearch: "Briše pretragu",
			logOut: "Odjavi se",
			mainQuote: "Pričanje priče je najmoćniji način da svetu predstavite ideje u današnje vreme.",
			quoteSource: "Robert McKee",
			checkYourStories: "Pogledaj priče",
			createStory: "Kreiraj priču",
			totalStories: "Ukupno priča: {{NUM_STORIES}}",
			noIssues: "Sve je dobro",
			userStories: "Priče autora {{USER_NAME}}",
			headerDisabledTooltip: "Sačekajte dok stvaramo magiju...",
			notOnTouch: "Nije dostupno na uređajima sa ekranima osetljivim na dodir",
		},
		deleteModal: {
			title: "Potvrdi brisanje",
			warningText: "Želite li zaista da obrišete ovu priču? Nećete moći da je ponovo vratite.",
			deleteText: "Obriši",
			cancel: "Otkaži"
		},
		loading: {
			loadingText: "Učitavanje vaših priča..."
		},
		cantFindStories: {
			whereAreStories: "Ne vidite vašu priču?",
			notSeeExplanation: "„Moje priče“ će izlistati samo story mape hostovane u platformi ArcGIS i kreirane pomoću aplikacija {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} ili {{SWIPE_SPYGLASS}}. Vidi {{FAQ}} za više informacija.",
			faq: "Najčešća pitanja",
			followingStoriesToUpdate: "Sledeće priče kreirane pomoću ranijih verzija naše aplikacije moraju da budu ažurirane da bi bile na listi „Moje priče“:",
			gettingStories: "Traženje priča kreiranih pomoću ranijih verzija naše aplikacije koje moraju da budu ažurirane...",
			title: "Naslov",
			typeOfStoryMap: "Tip",
			lastModified: "Poslednja izmena",
			allUpToDate: "Nema priča kreiranih pomoću ranijih verzija naše aplikacije koje moraju da budu ažurirane.",
			updateAll: "Ažuriraj sve",
			errorScanningForStories: "Došlo je do greške prilikom pretrage priča.",
			close: "Zatvori",
			updates: "Ažuriranja",
			updatingNumberOfNumber: "Ažurirano {{CURRENT_NUMBER}} od {{TOTAL}}",
			updatingNumberOfNumberAlt: "Ažurirano {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Ažuriranje uspešno!",
			reloadingStories: "Ponovno učitavanje vaših priča...",
			errorUpdatingStories: "Došlo je do greške prilikom ažuriranja priča.",
			partialUpdateMessage: "Uspešno ažurirane priče: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Prijavite se na „Story Maps“",
			signInTo: "Prijavite se sa postojećim ArcGIS Online nalogom da biste:",
			explanationOne: "kreirali živopisne story mape i ispričali priče.",
			explanationTwo: "koristili mape i podatke iz platforme ArcGIS Online u story mapama.",
			explanationThree: "upravljali story mapama i proverili status njihovog sadržaja.",
			dontHaveAccount: "Nemate ArcGIS Online nalog? Prijavite se za:",
			publicAccount: "besplatan nekomercijalan javni nalog",
			orgAccount: "besplatnu probnu ArcGIS pretplatu",
			timeExpired: "Prijava je istekla. Prijavite se ponovo da nastavite gde ste stali.",
			apiDidntLoad: "Učitavanje nije uspešno obavljeno. Osvežite stranicu.",
			needAccount: "Da li vam je potreban nalog?",
			letsGo: "Idemo!"
		},
		sharingLevel: {
			publicMessage: "Javni",
			privateMessage: "Privatni",
			organization: "Organizacija",
			changedSharing: "Promenjen nivo deljenja.",
			unableToChange: "Promena deljenja nije moguća.",
			partOfMap: "Ova stavka se nalazi na mapi. Da promenite njen nivo deljenja morate da promenite nivo deljenja mape.",
			storyPublicContentOrg: "Vaša priča je javna pa njen sadržaj ne može da bude podeljen samo sa vašom organizacijom",
			storyPublicContentPrivate: "Vaša priča je javna pa njen sadržaj ne može da bude privatan",
			mapOrg: "Deljenje mape sa organizacijom bi oštetilo priču",
			layerOrg: "Deljenje sloja sa organizacijom bi oštetilo priču",
			mapPrivate: "Označavanje mape privatnom bi oštetilo priču",
			layerPrivate: "Označavanje sloja privatnim bi oštetilo priču"
		},
		collectionList: {
			advocacy: "Zagovaranje i podizanje svesti",
			architecture: "Arhitektura i dizajn",
			conservation: "Očuvanje i održivost",
			culture: "Kultura",
			destinations: "Destinacije i turizam",
			disasters: "Prirodna nepogoda i oporavak",
			economy: "Ekonomija i razvoj",
			entertainment: "Zabava",
			history: "Istorija",
			infrastructure: "Infrastruktura",
			marketing: "Marketing",
			nature: "Priroda i životna sredina",
			news: "Novosti i događaji",
			oceans: "Okeani",
			parks: "Parkovi i rekreacija",
			people: "Ljudi i društvo",
			planning: "Planiranje i analiza",
			publicArt: "Javna umetnost",
			science: "Nauka i tehnologija",
			sport: "Sport",
			travelogues: "Putopisi"
		},
		types: {
			custom: "Prilagođeno",
			notSpecified: "Nije naveden tip"
		},
		storyMap: {
			shared: "Deljeno",
			saveFailed: "Greška pri čuvanju",
			numViews: "Prikazi: {{NUM_VIEWS}}",
			editStory: "Izmeni priču",
			viewLive: "Prikaži priču",
			preview: "Pregledaj",
			deleteButton: "Obriši",
			modified: "Izmenjeno {{DATE}}",
			summary: "Rezime",
			loading: "Učitavanje...",
			collapse: "skupi",
			close: "zatvori",
			hide: "sakrij",
			notAvailableWhenBroken: "Vaša priča ima dole navedene sporne stavke",
			cantBeDeleted: "Ova priča ima omogućenu zaštitu od brisanja. Pogledajte njenu stranu na stranici ArcGIS da je onemogućite.",
			shareDialog: {
				title: "Podelite priču sa svetom!",
				notPublicWarning: "Vaša priča je podeljena sa organizacijom. Samo članovi vaše organizacije će moći da je vide.",
				embedStory: "Ugradite priču",
				shortLink: "Skraćeni URL link",
				hideHeaderBar: "Sakrij traku zaglavlja",
				copied: "Kopirano",
				small: "malo",
				medium: "srednje",
				large: "veliko",
				custom: "prilagođeno",
				widthAbbreviation: "š",
				heightAbbreviation: "v",
				emptyDimension: "Unesite dimenziju.",
				seeExample: "Pregledaj ugradnju",
				removeHeader: "Sakrij zaglavlje aplikacije"
			},
			maps: {
				unableRetrieveTitle: "Preuzimanje mape nije moguće",
				unableRetrieveDescription: "Nismo uspeli da preuzmemo mape za ovu story mapu."
			},
			images: {
				unableRetrieveTitle: "Preuzimanje snimaka nije moguće",
				unableRetrieveDescription: "Nismo uspeli da preuzmemo snimke za ovu story mapu."
			},
			tags: {
				tags: "Oznake",
				collectionTags: "Predmet",
				selectASubject: "Izaberite predmet",
				save: "Sačuvaj",
				saved: "Sačuvano",
				errorSaving: "Greška pri čuvanju",
				tagTip: "Savet: Oznake pomažu ljudima da pronađu vašu priču. Što su oznake važnije, to će vaš rad imati više pregleda."
			},
			submitToGallery: {
				gallerySubmission: "Story Maps galerija",
				canSubmitIf: "Možete da nominujete vašu priču u galeriju ako sadrži sledeće:",
				hasOwnImage: "prilagođenu sličicu",
				chosenSubject: "predmet i nekoliko oznaka",
				chosenSubjectAlt: "{{SUBJECT}} i nekoliko oznaka",
				storyMapTopicSubject: "predmet",
				sharedPublicly: "Podeljeno javno",
				noBrokenContent: "Nema spornih stavki",
				nominateToGallery: "Nominuj za galeriju",
				comingSoon: "Stiže uskoro!",
				submitted: "Prosleđeno",
				errorSubmitting: "Greška pri prosleđivanju",
				ourGallery: "Galerija mapa sa pričom",
				galleryTip: "{{THE_GALLERY}} je organizovani set story mapa koji prikazuje neke od najboljih primera. Ako vaša priča bude izabrana, biće dodata u roku od 10 dana od prosleđivanja. Zbog broja nominacija ne možemo da se obavežemo da će vaša priča biti dodata."
			},
			placeholders: {
				noSummary: "Nema rezimea, kliknite da dodate."
			},
			errors: {
				cantDeleteStory: "Brisanje priče nije moguće.",
				unableToFind: "Pronalaženje sadržaja nije moguće",
				unableToRetrieve: "Nismo uspeli da preuzmemo sadržaj za ovu mapu sa pričom."
			},
			socialSharing: {
				availableWhenPublic: "Ova opcija će biti omogućena kada vaša priča postane javna"
			},
			dialog: {
				back: "Nazad",
				close: "Zatvori",
				cancel: "Otkaži"
			},
			imagePicker: {
				changeDefault: "Promeni podrazumevani snimak",
				changeImage: "Promeni sličicu",
				uploadImage: "Otpremi sličicu",
				chooseImage: "Odaberi sličicu",
				chooseAnImage: "Odaberi snimak",
				notInIEVersion: "Ova funkcija nije dostupna u programu Internet Explorer {{VERSION_NUMBER}}.",
				or: "ili",
				uploadAnImage: "Otpremi snimak",
				supportedFileTypes: "Podržani formati .png, .jpg, .gif",
				imageSizeMessage: "Vaš snimak mora da bude najmanje 286 px širok i 190 px visok.",
				minimumDimensions: "Minimum: 286 x 190px",
				imagesLoading: "Učitavanje snimaka...",
				noImages: "Ova priča nema snimaka",
				errorLoading: "Preuzimanje snimaka u ovoj priči nije moguće",
				clickBelowTip: "Kliknite na dugme ispod da otpremite snimak.",
				dragAndDrop: "Prevuci i otpusti",
				cropImage: "Izreži snimak",
				saveImage: "Sačuvaj snimak",
				save: "Sačuvaj",
				savingImage: "Čuvanje snimka...",
				saved: "Sačuvano!",
				errorSaving: "Čuvanje snimka nije moguće.",
				skipAndCrop: "Preskoči i izreži",
				wrongFormat: "Ovaj tip datoteke nije podržan.",
				noCropWarning: "Ovaj snimak ne može da bude izrezan, ali i dalje možete da ga sačuvate kao sličicu vaše priče sa njegovim izvornim dimenzijama ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}}px)."
			}
		},
		content: {
			media: {
				maps: "Mape",
				images: "Snimci",
				videos: "Video zapisi",
				webpages: "Veb stranice",
				tags: "Oznake",
				gallery: "Galerija"
			},
			headers: {
				status: "Status",
				source: "Izvor",
				name: "Naziv",
				shared: "Deljeno"
			},
			component: {
				mapTour: "Broj tačaka",
				bullet: "Znak za nabrajanje",
				tab: "Kartica",
				accordion: "Odeljak",
				mapJournal: "Odeljak"
			},
			titleType: {
				mapTour: "Natpis",
				mapJournal: "URL adresa",
				mapSeries: "URL adresa"
			},
			actions: {
				viewMap: "Prikaži mapu",
				editMap: "Izmeni mapu",
				fix: "Popravi",
				viewLayer: "Prikaži sloj"
			},
			contentType: {
				mainStage: "radnja na centralnom delu",
				sidePanel: "opis"
			},
			notification: {
				refreshExplanation: "Ponovo proverite priču",
				checking: "Proveravanje...",
				foundSomeIssues: "Pronašli smo neke sporne stavke",
				noIssuesFound: "Sporne stavke nisu pronađene",
				storyPublic: "Vaša priča je sada javna",
				storyOrg: "Vaša priča je sada podeljena sa organizacijom",
				storyPrivate: "Vaša priča je sada privatna",
				mapPublic: "Vaša mapa je sada javna",
				mapOrg: "Vaša mapa je sada podeljena sa organizacijom",
				mapPrivate: "Vaša mapa je sada privatna",
				layerPublic: "Sloj je sada javni",
				layerOrg: "Sloj je sada podeljen sa organizacijom",
				layerPrivate: "Sloj je sada privatan",
				contentPublic: "Sadržaj je sada javni",
				contentOrg: "Sadržaj je sada podeljen sa organizacijom",
				contentPrivate: "Sadržaj je sada privatan",
				storyAndContentPublic: "Priča i njen sadržaj su sada javni",
				storyAndContentOrg: "Priča i njen sadržaj su sada podeljeni sa organizacijom",
				storyAndContentPrivate: "Priča i njen sadržaj su sada privatni",
				shareBulkPrompt: "Želite li da podelite sadržaj vaše priče u skladu sa tim?",
				layersPublic: "Neki slojevi su takođe javno podeljeni",
				layersOrg: "Neki slojevi su takođe podeljeni sa organizacijom",
				layersPrivate: "Neki slojevi su takođe označeni kao privatni",
				mapsPublic: "Neke mape su takođe javno podeljene",
				mapsOrg: "Neke mape su takođe podeljene sa organizacijom",
				mapsPrivate: "Neke mape su takođe označene kao privatne",
				layersAndMapsPublic: "Neke mape i slojevi su takođe podeljeni javno",
				layersAndMapsOrg: "Neke mape i slojevi su takođe podeljeni sa organizacijom",
				layersAndMapsPrivate: "Neke mape i slojevi su takođe označeni kao privatni",
				yes: "Da",
				no: "Ne",
				premiumPublicSuccess: "Vaš premijum sadržaj je sada javno dostupan",
				subscriptionPublicSuccess: "Vaš pretplatnički sadržaj je sada javno dostupan"
			},
			errors: {
				publicDisabled: "Javno deljenje je onemogućeno od strane administratora",
				orgDisabled: "Deljenje sa organizacijom je onemogućeno od strane administratora",
				noMapName: "Preuzimanje naziva mape nije uspelo",
				notPublic: "NIJE JAVNO",
				inaccessible: "NEDOSTUPNO",
				deleted: "OBRISANO",
				cantAccessVideo: "Pristup video zapisu nije uspeo",
				noStoriesFound: "Nismo uspeli da pronađemo nijednu story mapu u sadržaju.",
				cantShowStories: "Prikazivanje story mapa nije moguće. Pokušajte kasnije.",
				consolationSearch: "Nismo uspeli da pronađemo nijednu priču.",
				notCompatibleWithBrowser : "„Moje priče“ nisu podržane u verzijama programa Internet Explorer ranijim od {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Ažurirajte pregledač.",
				searchTip: "Pokušajte i malo pojednostavite.",
				consolationNoStories: "Dobrodošli u „Moje priče“!",
				noStoriesTip: "Da biste napravili prvu story mapu, pogledajte stranicu aplikacija.",
				letsGo: "Idemo",
				cantChangeSharingLevel: "Promena nivoa deljenja nije moguća",
				cantChangeSharingLevels: "Promena nivoa deljenja nije moguća",
				errorUpdatingTitle: "Greška pri ažuriranju naslova",
				errorUpdatingSummary: "Greška pri ažuriranju rezimea",
				noEmptyTitle: "Naslov ne može da bude prazan",
				cantUpdatePremiumContent: "Ažuriranje premijum sadržaja nije moguće",
				cantUpdateSubscriptionContent: "Ažuriranje pretplatničkog sadržaja nije moguće",
				createFirstStory: "Kreiraj prvu priču"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Mapa je obrisana",
				layerHasBeenDeleted: "Sloj je obrisan",
				mapIsInaccessible: "Mapa je nedostupna",
				layerIsInaccessible: "Sloj je nedostupan",
				mapNotYoursNotAccessible: "Vlasnik mape je neko drugi i ona je nedostupna",
				layerServiceOkItemNot: "Sloj je dodat kao stavka koja je obrisana ili nedostupna",
				layerNotYoursNotAccessible: "Vlasnik sloja je neko drugi i on je nedostupan",
				mapOthersSharedBelowLevel: "Vi niste vlasnik mape i ona nije javno dostupna",
				layerOthersSharedBelowLevel: "Vi niste vlasnik sloja i on nije javno dostupan",
				noMapNoDetails: "Bez detalja mape ne možemo da vam kažemo ništa o slojevima",
				mapIsPrivate: "Mapa je privatna",
				mapIsOrg: "Mapa je podeljena samo sa organizacijom",
				layerIsPrivate: "Sloj je privatan",
				layerIsOrg: "Sloj je podeljen samo sa organizacijom",
				imageInaccessible: "Ova slika je nedostupna",
				videoInaccessible: "Ovaj video je nedostupan",
				webpageInaccessible: "Ova veb stranica je nedostupna",
				layerSecureService: "Sloj je zaštićen servis",
				mapSecureService: "Mapa je zaštićen servis",
				layerConsumesCredits: "Sloj je premijum sadržaj i oduzima kredite",
				layerSubscriptionContent: "Sloj je pretplatnički sadržaj",
				mapConsumesCredits: "Mapa je premium sadržaj i oduzima kredite",
				mapSubscriptionContent: "Mapa je pretplatnički sadržaj"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Nismo u mogućnosti da proverimo ovaj tip sloja",
				cantScanThisType: "Sloj nije tipa sloja koji možemo da proverimo",
				webpageNotScanned: "Veb stranice nisu proverene za sporne stavke",
				ignoredIssue: "Zanemarili ste grešku na ovom sloju. Ponovo učitajte stranicu i proverite ovu priču da biste pregledali grešku",
				ignoredIssueBuilder: "Zanemarili ste grešku na ovom sloju. Ponovo učitajte alatku za izradu da biste proverili ovu grešku ponovo"
			},
			scanningErrors: {
				deletedMap: "Obrisani sadržaj",
				inaccessibleMap: "Sadržaj mape nije dostupan",
				notYoursNotAccessible: "Vi niste vlasnik sadržaja i on nije javno dostupan",
				serviceOkItemNot: "Slojevi su funkcionalne ali nedostupne stavke",
				someContentNotPublic: "Sadržaj nije podeljen javno",
				someContentPrivate: "Privatni sadržaj",
				othersSharedBelowLevel: "Vi niste vlasnik sadržaja i on nije javno dostupan",
				premiumContent: "Premijum sadržaj",
				subscriptionContent: "Pretplatnički sadržaj",
				secureService: "Zaštićeni servisi",
				inaccessibleImage: "Nedostupni snimci",
				inaccessibleVideo: "Nedostupni video zapisi",
				inaccessibleWebpage: "Nedostupne veb stranice"
			},
			scanningErrorTips: {
				deletedMapTip: "Savet: Izmenite veb mapu i uklonite oštećen sadržaj, ili uklonite veb mapu iz priče.",
				inaccessibleMapTip: "Savet: Izmenite veb mapu i uklonite oštećen sadržaj, ili uklonite veb mapu iz priče.",
				notYoursNotAccessibleTip: "Savet: Izmenite veb mapu i uklonite sloj, ili uklonite veb mapu iz priče.",
				serviceOkItemNotTip: "Slojevi su dodati kao stavke koje su nedostupne ili obrisane. Slojevi rade ali ovo može da utiče na mapu (iskačući prozori, simbologija).",
				ignore: "Zanemari",
				fix: "Popravi",
				clickToShareOrg: "Kliknite na dugme da podelite sav ovaj sadržaj sa organizacijom, ili da promenite svaku stavku ručno klikom na dugmad za deljenje.",
				clickToSharePublic: "Kliknite na dugme da podelite sav ovaj sadržaj javno, ili da promenite svaku stavku ručno klikom na dugmad za deljenje.",
				shareOrg: "Podelite sa organizacijom",
				sharePublicly: "Podelite javno",
				othersSharedBelowLevelTip: "Savet: Deo sadržaja vaše priče je u vlasništvu {{USER_NAME}}, i drugi koji gledaju priču možda ne budu mogli da ga vide.",
				secureServiceTip: "Savet: Uklonite siguran servis iz priče ili pratite proceduru opisanu {{HERE}}.",
				blogArticle: "ovde",
				premiumContentTip: "Vaša priča sadrži premijum sadržaj i oduzeće {{CREDITS}} nakon što je učinite javno dostupnom. Učinite priču javno dostupnom i nastavite, ili uklonite slojeve iz priče.",
				premiumContentPublicTip: "Vaša priča sadrži premijum sadržaj i oduzeće {{CREDITS}} nakon što je učinite javno dostupnom. Potvrdite da želite da ovi slojevi budu javno dostupni ili ih uklonite iz priče.",
				subscriptionContentTip: "Vaša priča sadrži pretplatnički sadržaj koji po podrazumevanim postavkama nije javno dostupan. Potvrdite da želite da učinite ove slojeve dostupnim (ne oduzimaju se krediti), ili uklonite slojeve iz priče.",
				credits: "krediti",
				makePublic: "Učini javno dostupnim",
				confirm: "Potvrdi",
				inaccessibleImageTip: "Savet: obezbedite snimak koji nedostaje ili uklonite referencu na njega.",
				inaccessibleVideoTip: "Savet: obezbedite video zapis koji nedostaje ili uklonite referencu na njega.",
				inaccessibleWebpageTip: "Savet: obezbedite veb stranicu koja nedostaje ili uklonite referencu na nju."
			},
			removeLayer: {
				title: "Popravi sporne stavke sloja",
				layersWithIssue: "Slojevi sa spornim stavkama: {{NUM_WITH_ISSUE}}",
				issueExplanation: "Sloj {{LAYER_NAME}} je dodat kao stavka koja je nedostupna ili obrisana. Sloj radi, ali ovo može da utiče na mapu (iskačući prozori, simbologija). Ne možemo da procenimo da li je stavka važna za vašu priču.",
				issueSolution: "Da popravite sporne stavke, možete da izmenite mapu, uklonite sloj i ponovo dodate sloj na mapu koristeći sledeću URL adresu:",
				editMap: "Izmenite mapu",
				clickBelowWhenDone: "Kada ste završili sa uređivanjem, kliknite na dugme ispod:",
				rescanAndClose: "Ponovo skeniraj i zatvori"
			},
			info: {
				ownedBy: "Vlasnik ove stavke je {{USER_NAME}}",
				unknownUser: "neko drugi",
				untitledSection: "(Odeljak bez naslova)",
				introRecord: "Uvod"
			},
			layers: {
				layersHeader: "Slojevi",
				noLayers: "(Nema slojeva)",
				basemapParens: "(pozadinska mapa)"
			},
			images: {
				thumbnails: "Sličice",
				thumbnail: "Sličica",
				thumbnailParens: "(sličica)"
			},
			general: {
				noTitle: "(bez naslova)",
				loading: "Učitavanje..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "odeljci",
				secondTitle: "stil",
				secondValueA: "bočna tabla",
				secondValueB: "plutajuća tabla",
				thirdTitle: "mape"
			},
			mapTour: {
				firstTitle: "tačaka ture",
				secondTitle: "stil",
				secondValueA: "integrisano",
				secondValueB: "trodelna tabla",
				thirdTitle: "pozadinska mapa",
				thirdValueLoading: "Učitavanje...",
				thirdValueUnknown: "nepoznato"
			},
			mapSeries: {
				firstTitleA: "znakovi za nabrajanje",
				firstTitleB: "odeljci",
				firstTitleC: "kartice",
				secondTitle: "stil",
				secondValueA: "po znakovima za nabrajanje",
				secondValueB: "bočno „harmonika“ razvlačenje",
				secondValueC: "po karticama",
				thirdTitle: "mape"
			},
			swipeSpyglass: {
				firstTitle: "tačke interesovanja",
				secondTitle: "stil",
				secondValueA: "brzo prevlačenje",
				secondValueB: "durbin",
				thirdTitle: "mape"
			},
			crowdsource: {
				firstTitle: "doprinosi",
				secondTitle: "stil",
				secondValueA: "bočna tabla",
				secondValueB: "naslagano",
				thirdTitle: "pozadinska mapa",
				thirdValueLoading: "Učitavanje...",
				thirdValueUnknown: "nepoznato"
			}
		},
		progress: {
			checkingStories: "Proveravanje priča na sporne stavke...",
			stop: "Zaustavi",
			exit: "Izađi",
			dismiss: "Odbaci",
			done: "Završeno.",
			noStoriesWithIssuesLower: "Sporne stavke nisu pronađene!",
			storiesErrorFree: "Izgleda da vaše priče ne sadrže greške",
			scanAllError: "Skeniranje nije moguće - nismo uspeli da preuzmemo jednu ili više vaših priča",
			scanProgress: "{{NUM_SCANNED}} od {{NUM_TOTAL}}",
			scanStopped: "Skenirano priča: {{NUM_SCANNED}}, Priče sa spornim stavkama: {{ISSUE_STORIES}}",
			storiesWithIssues: "Priče sa spornim stavkama: {{NUM_STORIES}}"
		},
		newStories: {
			newStoriesFound: "Izgleda da ste kreirali novu priču.",
			includeStories: "Osveži priče",
			notWhileScanning: "Ovo će postati dostupno kada se završi provera"
		}
    })
);
