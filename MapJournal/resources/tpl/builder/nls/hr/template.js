﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Glavni prozor",
				sideTitle: "Bočna ploča",
				sideDescr: "Izgled priče s većom količinom teksta koji je odličan za kombiniranje fotografija, videozapisa i karata u jasno izrečenu poruku.",
				floatTitle: "Plutajuća ploča",
				floatDescr: "Izgled koji stavlja naglasak na vašu kartografiju dok istovremeno omogućuje prozirnu ploču s kratkim tekstom koja pomaže ispričati priču."
			},
			common: {
				lblStatus1: "Objavljeno",
				lblStatus2: "Skica",
				lblStatus3: "Skriveno"
			},
			settingsLayoutOptions: {
				title: "Opcije izgleda",
				cfgLeft: "Lijevo",
				cfgRight: "Desno",
				cfgSmall: "Malo",
				cfgMedium: "Srednje",
				cfgLarge: "Veliko",
				socialLinksLabel: "Prikaži poveznice za dijeljenje na dnu svakog odjeljka",
				socialLinksDescr: "To omogućuje čitateljima da referenciraju i promoviraju određene odjeljke predloška %TPL_NAME%. Primjerice, ako upotrijebite ikonu za dijeljenje u odjeljku, čitatelji će biti prebačeni na taj određeni odjeljak predloška %TPL_NAME%, a ne na početak vaše priče. Vaši čitatelji mogu upotrijebiti poveznicu društvenih medija u naslovu kako bi promovirali vaš cijeli predložak %TPL_NAME% (kartica zaglavlja) i kako bi se prebacili na početak predloška %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Fontovi",
				defaultLbl: "Prilagođeno",
				sectionTitleLbl: "Naslov odjeljka",
				sectionContentLbl: "Sadržaj odjeljka"
			},
			initPopup: {
				title: "Dobro došli u"
			},
			addEditPopup: {
				disabled: "Onemogućeno je dodavanje odjeljka jer je dosegnut broj dopuštenih odjeljaka.",
				titleAdd: "Dodaj odjeljak",
				titleAddHome: "Dodaj početni odjeljak",
				titleEdit: "Uredi odjeljka",
				step: "Korak",
				stepMainStageExplain: "Sadržaj glavnog prozora",
				stepPanelExplain: "Sadržaj",
				stepMainStageNextTooltip: "Unesi naslov odjeljka i odaberi sadržaj glavnog prozora",
				stepMainStageNextTooltip2: "Odaberi sadržaj glavnog prozora",
				step2NextTooltip: "Unesite naslov odjeljka i sadržaj predloška %LAYOUT-TYPE%",
				stepNextTooltipNext: "da biste nastavili sa sljedećim korakom",
				stepNextTooltipAdd: "da biste dodali odjeljak",
				firstAddExplain: "Prvi odjeljak jest početni odjeljak, razmišljajte o njemu kao o „naslovnici” svoje priče. Naslov koji ste upravo utvrdili prikazat će se velikim fontom.",
				firstAddLeanMore: "Saznaj više",
				titlePlaceholder: "Naslov odjeljka..."
			},
			addEditViewText: {
				editorPlaceholder: "Ovdje dodajte tekst, poveznice i male grafičke elemente.",
				editorActionsTitle: "Radnje u glavnom prozoru",
				editorActionsHelpDescr: "Upotrijebite ove kontrole kako biste stvorili poveznice koje će promijeniti glavni prozor. Primjerice, kada čitatelj klikne na poveznicu, možda ćete htjeti povećati kartu na određenu lokaciju, prikazati drugu web-kartu ili prikazati sliku.",
				mainStageDisabled: "Kad je uređivač povećan onemogućene su radnje u glavnom prozoru"
			},
			organizePopup: {
				title: "Organiziraj",
				lblHeader: "Povuci i ispusti odjeljke kako biste organizirali svoju priču.",
				lblColTitle: "Naziv",
				lblColPubDate: "Datum objave",
				lblColStatus: "Status",
				checkDisplayReverse: "Prikaži odjeljke u obrnutom redoslijedu",
				btnApplyWarning: "Potvrdite brisanje %NB% odjelj(a)ka",
				deleteTooltip: "Izbriši",
				firstSectionExplain: "(Početni odjeljak ne može se premjestiti)",
				exportMainStage: "Sadržaj glavnog prozora",
				exportPanel: "Sadržaj ploče",
				exportActions: "Radnje u glavnom prozoru"
			},
			exportData: {
				btn: "Izvoz sadržaja",
				tooltip: "Izvoz sadržaja omogućuje vam prikaz i stvaranje sigurnosne kopije sadržaja za slučaj da ga slučajno izbrišete. Jednostavno kopirajte i zalijepite sadržaj sa stranice u bilo koji program za obradu teksta."
			},
			help: {
				lblHelp: "Pomoć",
				lblAdd: "Dodaj odjeljak",
				lblSettings: "Postavke",
				lblOrga: "Organiziraj sadržaj",
				lblEdit: "Uređivanja",
				lblPublish: "Podijeli",
				lblTips: "Savjeti",
				lblMore: "Želite više?",
				lblLink: "Posjetite web-mjesto Esri Story Maps.",
				content1Div1: "Možete integrirati razne stilove prilikom izrade svoje priče. <strong>%LAYOUT_TITLE%</strong> obično sadrži tekst, slike i videozapise dok su karte na <strong>glavnom prozoru</strong>. Međutim, predložak %TPL_NAME% omogućuje vam da imate i slike, grafikone i videozapise na glavnom prozoru.",
				content1Div2: "Dodavanje odjeljaka omogućuje vam da uistinu prilagodite svoje iskustvo pričanja priče. Kako se čitatelji pomiču kroz vaš tekst %LAYOUT_TITLE%, karta na glavnom prozoru može se kretati i uvećavati na ključne točke te se automatski prebacivati između novih karata i slika kako bi se dala podrška vašoj poruci.",
				content2Div1: "U postavkama možete promijeniti izgled predloška %TPL_NAME%. Promijenite izgled, izaberite drugačiju paletu boja, promijenite font teksta itd.",
				content2Div2: "Možete i zamijeniti logotip Esri s vlastitim logotipom za svoj brend. Možete i odrediti web-mjesto koje će se pokrenuti ako čitatelji kliknu na vaš logotip kako bi mogli dobiti više informacija.",
				content3Div1: "Vaš je sadržaj organiziran u odjeljke. Možete imati koliko god želite odjeljaka (razmišljajte o njima kao o malim poglavljima). Tijek je tih poglavlja važan, u značajci Organiziraj možete promijeniti redoslijed ili izbrisati odjeljke kako želite.",
				content4Div1: "Pronašli ste pogrešku ili želite promijeniti materijal? Bez brige. Potražite ikonu za uređivanje u appu kako biste promijenili sadržaj. Upotrijebit ćete funkcije uređivanja puno puta kako razvijate svoj predložak %TPL_NAME%!",
				content5Div1: "Kada spremite svoj predložak %TPL_NAME%, isprva je privatan. Upotrijebite gumb Podijeli da biste ga podijelili s drugima. Možete javno podijeliti predložak %TPL_NAME% kako bi mu bilo tko mogao pristupiti.",
				content5Div2: "Ovisno o vašem računu, možete imati i opciju da dijelite predložak %TPL_NAME% samo s ljudima iz vaše organizacije pa mu drugi ne mogu pristupiti.",
				content6Div1: "Naslov početnog odjeljka također je naslov vašeg dnevnika. Razmišljajte o početnom odjeljku kao o „naslovnici” svoje priče. Naslov početnog odjeljka ostat će vidljiv kada čitatelji navigiraju kroz Journal.",
				content6Div2: "Vaš naslov %LAYOUT_TITLE% ne mora biti samo tekst. Razmislite o tome da uključite fotografije i videozapise kako biste dali priči život i kako biste razlomili dugačke dijelove teksta!"
			},
			landing: {
				lblAdd: "Kako želite nazvati svoj Map Journal?",
				phAdd: "Unesite naslov...",
				lblOR: "ili",
				lblHelp: "Krenite na obilazak"
			},
			firstAddSplash: {
				thisis: "Ovo je",
				lblMain: "Ovo je %BR% glavni prozor"
			}
        }
    })
);
