// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "First_Topic.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("First_Topic.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', '77d22b2f-7166-40a9-813f-7d54c887904c' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "fa");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"BreadcrumbStart":"صفحه اصلی: ","BrsNextButton":"بعدی","BrsPrevButton":"قبلی","CloseFavorites":"بستن علاقه مندی ها","ContentsTab":"فهرست مطالب","CookiesAcceptText":"از شما می‌خواهیم برای اهداف عملکرد، قابلیت خوانش و تجربه، کوکی‌ها را بپذیرید. کوکی‌ها برای نشانه‌گذاری موضوعات دلخواه و بازیابی فهرست مطالب، نمایه و واژه‎​نامه‌های تغییر موضوع استفاده می‌شوند. این تنظیم فقط یک بار پرسیده می‌شود و با پاک کردن کوکی‌های مرورگر می‌تواند دوباره برگردانده شود.","CookiesAcceptButton":"پذیرفتن","CookiesDenyButton":"بعدا","EditFavorites":"ویرایش موارد علاقه","FavoriteArticle":"مقاله ذخیره شده","FavoriteArticles":"مقالات ذخیره شده","FullScreenButton":"تمام صفحه","GlossaryTab":"واژه‎​نامه","GlossResultHeaderLabel":"فرهنگ لغات واژه‎​نامه","HideLeftPanelTip":"پنهان کردن پانل چپ","HideResults":"پنهان کردن نتایج","HomeButton":"صفحه اصلی","HomePageLogoTitle":"نشان‌واره","HomePageSubtitle":"چه کمکی می‌توانیم بکنیم؟","IndexTab":"نمایه","MiniTOCCaption":"پیرامون این موضوع","NoResultsFoundText":"نتیجه ای یافت نشد","PrintButtonTip":"چاپ کردن","RemoveFavItem":"حذف کردن ","RemoveHighlight":"حذف هایلایت","ResultsFoundText":"1% نتیجه برای 2% یافت شد","SearchPlaceHolder":"درحال جستجو...","SetAsFavorite":"تنظیم به عنوان مورد دلخواه","ShowLeftPanelTip":"نمایش پانل چپ","TOCTileArticlesCount":"مقاله (ها)","ToTopButtonTip":"رفتن به بالا","UnsetAsFavorite":"برداشتن از موارد دلخواه","TopicHiddenText":"این موضوع بوسیله فیترهای انتخاب‎​شده فیلتر شده است.","ResetFilters":"بازنشانی فیلترها"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "Blank Project");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Orange");
model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
})();
