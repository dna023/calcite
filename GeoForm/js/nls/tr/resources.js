﻿define(
     ({
        map: {
            error: "Harita oluşturulamıyor"
        },
        onlineStatus: {
            offline: "Şu anda çevrimdışı çalışıyorsunuz. Form iletimleri, sunucu ile bir bağlantı kurulana kadar yerel olarak kaydedilecek.",
            reconnecting: "Yeniden bağlanıyor&hellip;",
            pending: "${total} bekleyen düzenleme, bir ağ bağlantısı yeniden kurulduğunda gönderilecektir."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Kuruluşum",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "İçeriğim",
                    favoritesLabel: "Favorilerim"
                },
                title: "Web Haritası Seç",
                searchTitle: "Ara",
                ok: "Tamam",
                cancel: "İptal",
                placeholder: "Arama terimini gir"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Kuruluşum",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "İçeriğim",
                    favoritesLabel: "Favorilerim"
                },
                title: "Grup Seç",
                searchTitle: "Ara",
                ok: "Tamam",
                cancel: "İptal",
                placeholder: "Arama terimini gir"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "Aşağıda bir GeoForm bağlantısı verilmiştir"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Kuzeye Yöneltme",
            utm_easting: "Doğuya Yöneltme",
            utm_zone_number: "Bölge Numarası",
            geoFormGeneralTabText: "1. Bilgileri girin",
            locationInformationText: "2. Konumu seçin",
            submitInformationText: "3. Formu doldurun",
            submitInstructions: "Bu bilgileri haritaya ekleyin.",
            myLocationText: "Mevcut Konum",
            locationDescriptionForMoreThanOneOption: "Haritaya dokunarak/tıklayarak ya da aşağıdaki seçeneklerden birini kullanarak bu giriş için bir konum belirtin.",
            locationDescriptionForOneOption: "Haritaya dokunarak/tıklayarak ya da aşağıdaki seçeneği kullanarak bu giriş için bir konum belirtin.",
            locationDescriptionForNoOption: "Haritaya tıklayarak/dokunarak bu giriş için konum belirtin.",
            addressText: "Ara",
            geographic: "Enlem/Boylam",
            locationTabText: "Konum",
            locationPopupTitle: "Konum",
            submitButtonText: "Giriş Gönder",
            submitButtonTextLoading: "Gönderiliyor&hellip;",
            formValidationMessageAlertText: "Aşağıdaki alanlar gereklidir:",
            selectLocation: "İletiminiz için bir konum seçin.",
            emptylatitudeAlertMessage: "Bir ${openLink}latitude${closeLink} koordinatı girin.",
            emptylongitudeAlertMessage: "Bir ${openLink}longitude${closeLink} koordinatı girin.",
            shareUserTitleMessage: "Katkılarınız için teşekkürler!",
            entrySubmitted: "Girişiniz haritaya gönderildi.",
            shareThisForm: "Bu Formu Paylaş",
            shareUserTextMessage: "Aşağıdaki seçenekleri kullanarak diğerlerine katkıda bulunmasını söyleyin.",
            addAttachmentFailedMessage: "Eklenti katmana eklenemiyor",
            addFeatureFailedMessage: "Özellik katmana eklenemiyor",
            noLayerConfiguredMessage: "Düzenlenebilir bir detay katmanı yüklenirken ya da bulunurken bir hata oluştu. Formu görüntülemek ve iletimleri toplama işlemini başlatmak amacıyla Web haritasına düzenlenebilir bir Detay Katmanı ekleyin.",
            placeholderLatitude: "Enlem (Y)",
            placeholderLongitude: "Boylam (X)",
            latitude: "Enlem",
            longitude: "Boylam",
            findMyLocation: "Beni Bul",
            finding: "&hellip; bulunuyor",
            backToTop: "Başa dön",
            addressSearchText: "Gönderiminiz burada görünecek. Konumu düzeltmek için raptiyeyi sürükleyebilirsiniz.",
            shareModalFormText: "Form Bağlantısı",
            close: "Kapat",
            locationNotFound: "Konum bulunamadı.",
            setLocation: "Konum Ayarla",
            find: "Adres veya yer bul",
            attachment: "İlişik",
            toggleDropdown: "Açılır Menüyü Değiştir",
            invalidString: "Geçerli değer girin.",
            invalidSmallNumber: "-32768 ile 32767 arasında geçerli ${openStrong}tamsayı${closeStrong} değeri girin.",
            invalidNumber: "-2147483648 ile 2147483647 arasında geçerli ${openStrong}tamsayı${closeStrong} değeri girin.",
            invalidFloat: "Geçerli ${openStrong}kayan nokta${closeStrong} değeri girin.",
            invalidDouble: "Geçerli ${openStrong}çift${closeStrong} değeri girin.",
            invalidLatLong: "Geçerli enlem ve boylam koordinatları girin.",
            invalidUTM: "Geçerli UTM koordinatları girin.",
            invalidUSNG: "Geçerli USNG koordinatları girin.",
            invalidMGRS: "Geçerli MGRS koordinatları girin.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Seç&hellip;",
            applyEditsFailedMessage: "Üzgünüz girişiniz gönderilemedi. Yeniden deneyin.",
            requiredFields: "Bazı hatalar var. Bunları aşağıda düzeltin.",
            requiredField: "(gerekli)",
            error: "Hata",
            textRangeHintMessage: "${openStrong}İpucu:${closeStrong} Minimum değer ${minValue} ve Maksimum değer ${maxValue}",
            dateRangeHintMessage: "${openStrong}İpucu:${closeStrong} Minimum Tarih ${minValue} ve Maksimum Tarih ${maxValue}",
            remainingCharactersHintMessage: "${value} karakter kaldı"
        },
        builder: {
            invalidUser: "Üzgünüz, bu öğeyi görüntüleme izniniz yok",
            invalidWebmapSelectionAlert: "Seçilen web haritası kullanılacak geçerli bir katman içermiyor. Devam etmek için web haritanıza düzenlenebilir bir FeatureLayer ekleyin.",
            invalidWebmapSelectionAlert2: "Daha fazla bilgi için bkz. ${openLink}Özellik Hizmeti nedir?${closeLink}",
            selectFieldsText: "Form Alanlarını Seç",
            selectThemeText: "Form Teması Seç",
            webmapText: "Web haritası",
            layerText: "Katman",
            detailsText: "Ayrıntılar",
            fieldsText: "Alanlar",
            styleText: "Stil",
            optionText: "Seçenekler",
            previewText: "Önizleme",
            publishText: "Yayınla",
            optionsApplicationText: "Seçenekler",
            titleText: "Oluşturucu",
            descriptionText: "GeoForm, bir ${link1}Özellik Hizmetinin${closeLink} form tabanlı veri düzenlemesi için yapılandırılabilir bir şablondur. Bu uygulama kullanıcıların veriyi haritanın açılır penceresi yerine bir form ile girmesine, aynı zamanda ${link2}Web Haritası${closeLink} ve düzenlenebilir Detay Servislerinin gücünden yararlanmasına olanak tanır. GeoForm\'unuzu özelleştirmek ve dağıtmak için aşağıdaki adımları kullanın.",
            btnPreviousText: "Önceki",
            btnNextText: "Sonraki",
            webmapTabTitleText: "Web haritası seç",
            viewWebmap: "Web haritasını görüntüle",
            webmapDetailsText: "Seçilen web haritası ${webMapTitleLink}${webMapTitle}${closeLink}. Farklı bir web haritası seçmek için \'Web Haritası Seç\' düğmesine tıklayın",
            btnSelectWebmapText: "Web Haritası Seç",
            btnSelectWebmapTextLoading: "Yükleniyor&hellip;",
            layerTabTitleText: "Düzenlenebilir Katman Seç",
            selectLayerLabelText: "Katman",
            selectLayerDefaultOptionText: "Katman seç",
            detailsTabTitleText: "Form Ayrıntıları",
            detailTitleLabelText: "Başlık",
            detailLogoLabelText: "Logo Görseli",
            descriptionLabelText: "Talimatlar ve Ayrıntılar Oluştur",
            fieldDescriptionLabelText: "Yardım Metni (isteğe bağlı)",
            fieldTabFieldHeaderText: "Alan",
            fieldTabLabelHeaderText: "Etiket",
            fieldTabDisplayTypeHeaderText: "Farklı Görüntüle",
            fieldTabOrderColumnText: "Derece",
            fieldTabVisibleColumnText: "Etkin",
            selectMenuOption: "Menü seç",
            selectRadioOption: "Radyo Butonu",
            selectTextOption: "Metin",
            selectDateOption: "Veri Seçici",
            selectRangeOption: "Touch-Spinner",
            selectCheckboxOption: "Onay Kutusu",
            selectMailOption: "E-posta",
            selectUrlOption: "URL",
            selectTextAreaOption: "Metin Alanı",
            previewApplicationText: "Uygulamayı Önizle",
            saveApplicationText: "Uygulamayı Kaydet",
            saveText: "Kaydet",
            toggleNavigationText: "Gezinmeye geç",
            formPlaceholderText: "Formum",
            shareBuilderInProgressTitleMessage: "GeoForm Yayınlanıyor",
            shareBuilderProgressBarMessage: "Bekleyin&hellip;",
            shareBuilderTitleMessage: "Başarılı! Öğe kaydedildi",
            shareBuilderTextMessage: "Diğerleri ile paylaşarak bilgiyi toplamaya başlayabilirsiniz",
            shareModalFormText: "Form Bağlantısı",
            shareBuilderSuccess: "GeoForm\'unuz güncellenmiş ve yayınlanmış!",
            geoformTitleText: "Geo Form",
            layerTabText: "Bu, GeoForm\'un üretileceği katmandır. Katman, hedef kitleniz için uygun paylaşım izinleri ile düzenleme için etkinleştirilmiş bir detay servisi olmalıdır.",
            detailsTabText: "Başlığı düzenlemek için aşağıdaki Form Ayrıntısı kutularını kullanın, özel bir logo ekleyin ve GeoForm hedef kitleniz için kısa bir açıklama girin. Açıklamada diğer kaynaklara bağlantılar, iletişim bilgileri ekleyebilir ve hatta hedef kitlenizi GeoForm ile toplanan tüm veriyi içeren web haritalama uygulamasına yönlendirebilirsiniz.",
            fieldsTabText: "Burada hangi alanların GeoForm hedef kitleniz için görünür olacağını seçebilir, bunların göreceği etiketleri düzenleyebilir ve veri girişine yardımcı olmak için kısa bir Açıklama ekleyebilirsiniz.",
            styleTabText: "Tercihinize göre aşağıdaki temaları kullanarak GeoForm\'unuzu biçimlendirin.",
            publishTabText: "GeoForm\'unuzu özelleştirmeyi bitirdiyseniz, uygulamayı kaydedin ve kitlenizle paylaşmaya başlayın. Her zaman bu oluşturucuya geri dönebilir ve geri bildirimlere bağlı olarak özelleştirmeye devam edebilirsiniz.",
            headerSizeLabel:"Başlık Boyutu",
            smallHeader: "Küçük Başlık Kullan",
            bigHeader: "Büyük Başlık Kullan",
            pushpinText: "Raptiye",
            doneButtonText: "Kaydet ve Çık",
            fieldTabPlaceHolderHeaderText: "İpucu (isteğe bağlı)",
            enableAttachmentLabelText: "${openStrong}Eklentileri Etkinleştir${closeStrong}",
            enableAttachmentLabelHint: "Eklentileri burada etkinleştirebilir/devre dışı bırakabilirsiniz",
            attachmentIsRequiredLabelText: "${openStrong}Eklenti Gerekiyor${closeStrong}",
            attachmentIsRequiredLabelHint: "Gerekiyorsa, kullanıcıların bir eklenti girmesi gerekebilir.",
            attachmentLabelText: "Eklenti Düğmesi Etiketi",
            attachmentLabelHint: "Bu metin Ekle düğmesinin yanında görünür. Bu alanı hedef kitlesinden eklemesini istediğiniz şeyi (fotoğraf, video, belge vb.), istediğiniz formatı (.jpeg, .png, .docx, .pdf, etc.) ve ek talimatları açıklamak için kullanabilirsiniz",
            attachmentDescription: "İlişik Tanımı",
            attachmentHint: "Gerekiyorsa, burada ilave eklenti talimatları sunun.",
            jumbotronDescription: "Formunuz için büyük ya da küçük başlık kullanın. büyük bir başlık uygulamanızın amacını tanımlamanıza yardımcı olabilir ancak ekranınızda daha fazla yer kaplayacaktır",
            shareGeoformText: "Geoform Paylaş",
            shareDescription: "Paylaşım paneli izleyici kitlenizin bir iletim yaptıklarında GeoForm\'u diğer ortak çalışanlarla paylaşmasını kolaylaştırır - bu işlev istenildiğinde devre dışı bırakılabilir.",
            defaultMapExtent: "Varsayılan Harita Yayılımı",
            defaultMapExtentDescription: "Harita, iletimden sonra web haritanızın varsayılan yayılımına sıfırlanacak - bu işlev istenildiğinde devre dışı bırakılabilir.",
            pushpinOptionsDescription: "Harita raptiyesi için çeşitli renkler arasından seçim yapın, kullanıcının haritada kendi iletimini yerleştirmesi için harita sembolojisinden farklı olmalıdır",
            selectLocationText: "Konum Seçme Kriteri:",
            myLocationText: "Konumum",
            searchText: "Ara",
            coordinatesText: "Enlem ve Boylam Koordinatları",
            usng: "USNG Koordinatları",
            mgrs: "MGRS Koordinatları",
            utm: "UTM Koordinatları",
            selectLocationSDescription: "Kullanıcıların bu yöntemleri kullanarak bir konum seçmesine izin verin.",
            dragTooltipText:"Alanı, görünmesini istediğiniz yere sürükleyin",
            showHideLayerText:"Kaymanı Göster/Gizle",
            showHideLayerHelpText:"GeoForm\'u Katmanı Göstermek/Gizleme için kullanabilirsiniz"
        }
    })
);