﻿define(
     ({
        map: {
            error: "Nelze vytvořit mapu"
        },
        onlineStatus: {
            offline: "Právě pracujete v režimu offline. Odeslané formuláře budou uloženy na místní počítač, dokud nebude navázáno spojení se serverem.",
            reconnecting: "Obnovuje se připojení&hellip;",
            pending: "Po opětovném navázání síťového připojení bude odesláno ${total} neuložených úprav."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Moje organizace",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Můj obsah",
                    favoritesLabel: "Moje oblíbené"
                },
                title: "Vybrat webovou mapu",
                searchTitle: "Hledat",
                ok: "OK",
                cancel: "Storno",
                placeholder: "Zadat vyhledávací výraz"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Moje organizace",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Můj obsah",
                    favoritesLabel: "Moje oblíbené"
                },
                title: "Vybrat skupinu",
                searchTitle: "Hledat",
                ok: "OK",
                cancel: "Storno",
                placeholder: "Zadat vyhledávací výraz"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "Zde se nachází odkaz na formulář GeoForm."
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Odsazení v severním směru",
            utm_easting: "Odsazení ve východním směru",
            utm_zone_number: "Číslo zóny",
            geoFormGeneralTabText: "1. Zadejte informace",
            locationInformationText: "2. Vyberte umístění",
            submitInformationText: "3. Vyplňte formulář",
            submitInstructions: "Přidejte tyto informace do mapy.",
            myLocationText: "Současná poloha",
            locationDescriptionForMoreThanOneOption: "Zadejte polohu pro tento záznam kliknutím/klepnutím na mapu, nebo pomocí jedné z následujících možností.",
            locationDescriptionForOneOption: "Zadejte polohu pro tento záznam kliknutím/klepnutím na mapu nebo pomocí následující možnosti.",
            locationDescriptionForNoOption: "Zadejte polohu pro tento záznam kliknutím/klepnutím na mapu.",
            addressText: "Hledat",
            geographic: "Zem. šířka/délka",
            locationTabText: "Umístění",
            locationPopupTitle: "Poloha",
            submitButtonText: "Odeslat záznam",
            submitButtonTextLoading: "Odesílání&hellip;",
            formValidationMessageAlertText: "Následující pole jsou povinná:",
            selectLocation: "Vyberte umístění odeslaného obsahu.",
            emptylatitudeAlertMessage: "Zadejte souřadnice ${openLink}zeměpisné šířky${closeLink}.",
            emptylongitudeAlertMessage: "Zadejte souřadnice ${openLink}zeměpisné délky${closeLink}.",
            shareUserTitleMessage: "Děkujeme za váš příspěvek!",
            entrySubmitted: "Váš záznam byl odeslán do mapy.",
            shareThisForm: "Sdílet tento formulář",
            shareUserTextMessage: "Požádejte ostatní o přispění pomocí následujících možností.",
            addAttachmentFailedMessage: "K vrstvě nelze připojit přílohu.",
            addFeatureFailedMessage: "K vrstvě nelze přidat prvek.",
            noLayerConfiguredMessage: "Došlo k chybě při nahrávání nebo hledání editovatelné vrstvy prvků. Aby bylo možné zobrazit formulář a začít sbírat údaje, přidejte do webové mapy editovatelnou vrstvu prvků.",
            placeholderLatitude: "Zeměpisná šířka (Y)",
            placeholderLongitude: "Zeměpisná délka (X)",
            latitude: "Zeměpisná šířka",
            longitude: "Zeměpisná délka",
            findMyLocation: "Najít mou polohu",
            finding: "Vyhledávání polohy&hellip;",
            backToTop: "Zpět na začátek",
            addressSearchText: "Váš příspěvek se objeví zde. Pro opravu polohy můžete posunout špendlík.",
            shareModalFormText: "Odkaz na formulář",
            close: "Zavřít",
            locationNotFound: "Umístění nebylo nalezeno.",
            setLocation: "Nastavit polohu",
            find: "Najít adresu nebo místo",
            attachment: "Příloha",
            toggleDropdown: "Přepnout rozbalovací seznam",
            invalidString: "Zadejte platnou hodnotu.",
            invalidSmallNumber: "Zadejte platnou ${openStrong}celočíselnou${closeStrong} hodnotu mezi −32768 a 32767.",
            invalidNumber: "Zadejte platnou ${openStrong}celočíselnou${closeStrong} hodnotu mezi −2147483648 a 2147483647.",
            invalidFloat: "Zadejte platnou hodnotu ${openStrong}s plovoucí desetinnou čárkou${closeStrong}.",
            invalidDouble: "Zadejte platnou ${openStrong}číselnou hodnotu s dvojitou přesností${closeStrong}.",
            invalidLatLong: "Zadejte platné souřadnice zeměpisné šířky a zeměpisné délky.",
            invalidUTM: "Zadejte platné souřadnice souřadnicového systému UTM.",
            invalidUSNG: "Zadejte platné souřadnice souřadnicového systému USNG.",
            invalidMGRS: "Zadejte platné souřadnice souřadnicového systému MGRS.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Výběr&hellip;",
            applyEditsFailedMessage: "Je nám líto, vaši položku není možné odeslat. Zkuste to znovu.",
            requiredFields: "Byly nalezeny chyby. Prosím, opravte je.",
            requiredField: "(vyžadováno)",
            error: "Chyba",
            textRangeHintMessage: "${openStrong}Tip:${closeStrong} Minimální hodnota ${minValue} a Maximální hodnota ${maxValue}",
            dateRangeHintMessage: "${openStrong}Tip:${closeStrong} Minimální datum ${minValue} a Maximální datum ${maxValue}",
            remainingCharactersHintMessage: "Počet zbývajících znaků: ${value}"
        },
        builder: {
            invalidUser: "Je nám líto, ale nemáte oprávnění prohlížet tuto položku.",
            invalidWebmapSelectionAlert: "Vybraná webová mapa neobsahuje platnou vrstvu vhodnou k použití. Pokud chcete pokračovat, přidejte do webové mapy editovatelnou vrstvu s prvky.",
            invalidWebmapSelectionAlert2: "Další informace naleznete v části ${openLink}Co je služba Feature Service?${closeLink}",
            selectFieldsText: "Vyberte pole formuláře",
            selectThemeText: "Vybrat motiv formuláře",
            webmapText: "Webová mapa",
            layerText: "Vrstva",
            detailsText: "Podrobnosti",
            fieldsText: "Pole",
            styleText: "Styl",
            optionText: "Možnosti",
            previewText: "Náhled",
            publishText: "Publikovat",
            optionsApplicationText: "Možnosti",
            titleText: "Nástroj pro tvorbu",
            descriptionText: "GeoForm je konfigurovatelná šablona určená k úpravě dat služeb typu ${link1}Feature Service${closeLink} formou formulářů. Tato aplikace uživatelům umožňuje zadávat data prostřednictvím formuláře namísto vyskakovacího okna v mapě a využívá výhod ${link2}webové mapy${closeLink} a editovatelných služeb typu Feature Service. Následující postup vám pomůže upravit a vydat vlastní formulář GeoForm.",
            btnPreviousText: "Předchozí",
            btnNextText: "Další",
            webmapTabTitleText: "Vyberte webovou mapu",
            viewWebmap: "Zobrazit webovou mapu",
            webmapDetailsText: "Je zvolena webová mapa ${webMapTitleLink}${webMapTitle}${closeLink}. Chcete-li zvolit jinou webovou mapu, klikněte na tlačítko Zvolit webovou mapu.",
            btnSelectWebmapText: "Zvolit webovou mapu",
            btnSelectWebmapTextLoading: "Načítání&hellip;",
            layerTabTitleText: "Vybrat editovatelnou vrstvu",
            selectLayerLabelText: "Vrstva",
            selectLayerDefaultOptionText: "Vybrat vrstvu",
            detailsTabTitleText: "Podrobnosti formuláře",
            detailTitleLabelText: "Nadpis",
            detailLogoLabelText: "Obrázek loga",
            descriptionLabelText: "Pokyny a podrobnosti k formuláři",
            fieldDescriptionLabelText: "Text nápovědy (volitelný)",
            fieldTabFieldHeaderText: "Pole",
            fieldTabLabelHeaderText: "Štítek",
            fieldTabDisplayTypeHeaderText: "Zobrazit jako",
            fieldTabOrderColumnText: "Pořadí",
            fieldTabVisibleColumnText: "Povoleno",
            selectMenuOption: "Vybrat nabídku",
            selectRadioOption: "Přepínač",
            selectTextOption: "Text",
            selectDateOption: "Výběr data",
            selectRangeOption: "Dotykový číselník",
            selectCheckboxOption: "Zaškrtávací políčko",
            selectMailOption: "E-mail",
            selectUrlOption: "adresa URL",
            selectTextAreaOption: "Textová oblast",
            previewApplicationText: "Náhled aplikace",
            saveApplicationText: "Uložit aplikaci",
            saveText: "Uložit",
            toggleNavigationText: "Přepnout navigaci",
            formPlaceholderText: "Můj formulář",
            shareBuilderInProgressTitleMessage: "Publikování formuláře GeoForm",
            shareBuilderProgressBarMessage: "Čekejte prosím&hellip;",
            shareBuilderTitleMessage: "Úspěch! Položka byla uložena.",
            shareBuilderTextMessage: "Můžete začít sbírat informace sdílením s ostatními.",
            shareModalFormText: "Odkaz na formulář",
            shareBuilderSuccess: "Váš formulář GeoForm byl aktualizován a publikován!",
            geoformTitleText: "Geo Form",
            layerTabText: "Z této vrstvy bude vytvořen formulář GeoForm. Vrstva musí být typu Feature Service s povolenými možnostmi úprav a oprávněními pro sdílení vhodnými pro vaše uživatele.",
            detailsTabText: "Pomocí polí Podrobnosti formuláře můžete přizpůsobit nadpis, přidat vlastní logo a zadat krátký popis pro uživatele svého formuláře GeoForm. Do popisu můžete přidat odkazy na další zdroje, kontaktní informace, nebo odkázat uživatele na aplikaci webového mapování obsahující všechna data shromážděná prostřednictvím formuláře GeoForm.",
            fieldsTabText: "Zde můžete vybrat, která pole se zobrazí uživatelům vašeho formuláře GeoForm, upravit popisky, které uvidí, a přidat krátký popis, který jim pomůže se zadáváním dat.",
            styleTabText: "Upravte styl svého formuláře GeoForm podle svých představ pomocí níže uvedených motivů.",
            publishTabText: "Pokud jste dokončili úpravy formuláře GeoForm, uložte aplikaci a začněte ji sdílet se svými uživateli. Do tohoto nástroje pro tvorbu se můžete kdykoli vrátit a na základě zpětné vazby aplikaci dále upravit.",
            headerSizeLabel:"Velikost záhlaví",
            smallHeader: "Použít malé záhlaví",
            bigHeader: "Používat velké záhlaví",
            pushpinText: "Připínáček",
            doneButtonText: "Uložit a ukončit",
            fieldTabPlaceHolderHeaderText: "Tip (volitelný)",
            enableAttachmentLabelText: "${openStrong}Povolit přílohy${closeStrong}",
            enableAttachmentLabelHint: "Zde můžete také povolit nebo zakázat přílohy.",
            attachmentIsRequiredLabelText: "${openStrong}Je požadována příloha${closeStrong}.",
            attachmentIsRequiredLabelHint: "V případě potřeby může být po uživatelích požadováno, aby vložili přílohu.",
            attachmentLabelText: "Popisek tlačítka přílohy",
            attachmentLabelHint: "Tento text se bude zobrazovat vedle tlačítka Příloha. Můžete zde uvést, jaký druh přílohy mají uživatelé vložit (fotografie, video, dokumenty atd.), formát souboru (.jpeg, .png, .docx, .pdf atd.), a další případné pokyny.",
            attachmentDescription: "Popis přílohy",
            attachmentHint: "V případě potřeby zde můžete uvést dodatečné pokyny týkající se příloh.",
            jumbotronDescription: "Pro svůj formulář můžete použít velké nebo malé záhlaví. Velké záhlaví pomáhá přesněji určit účel vaší aplikace, zabírá však více místa.",
            shareGeoformText: "Sdílet formulář GeoForm",
            shareDescription: "Panel sdílení umožňuje uživatelům jednoduše sdílet formuláře GeoForm s ostatními spolupracovníky poté, co odešlou příspěvek. Tuto možnost je možné kdykoliv vypnout.",
            defaultMapExtent: "Výchozí rozsah mapy",
            defaultMapExtentDescription: "Po odeslání se mapa obnoví na výchozí rozsah Vaší webové mapy. Tuto možnost je možné kdykoliv vypnout.",
            pushpinOptionsDescription: "Zvolte si z řady barev určených pro připínáček do mapy. Barva by měla být odlišná od symbolů mapy, aby uživatelé mohli snadno umísťovat příspěvky do mapy.",
            selectLocationText: "Vybrat polohu podle",
            myLocationText: "Moje poloha",
            searchText: "Hledat",
            coordinatesText: "Souřadnice zeměpisné šířky a délky",
            usng: "Souřadnice USNG",
            mgrs: "Souřadnice MGRS",
            utm: "Souřadnice UTM",
            selectLocationSDescription: "Umožňuje uživatelům vybírat polohu těmito způsoby.",
            dragTooltipText:"Přetáhněte pole na požadované místo",
            showHideLayerText:"Zobrazit/skrýt vrstvu",
            showHideLayerHelpText:"Můžete nastavit, zda má formulář GeoForm zobrazit nebo skrýt vrstvu."
        }
    })
);