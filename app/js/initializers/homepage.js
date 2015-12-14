(function() {
  $(function() {
    var fullpageOptions, homepage, html;
    html = $('body, html');
    homepage = $("#homepage");
    if (!homepage.get(0)) {
      return;
    }
    fullpageOptions = {
      sectionSelector: '.page-section',
      slideSelector: '.page-section--slide',
      navigation: true,
      fitToSection: false,
      recordHistory: false,
      autoScrolling: false
    };
    return homepage.fullpage(fullpageOptions);
  });

}).call(this);
