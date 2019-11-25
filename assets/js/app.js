//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.changeNavBackground();
  },
  changeNavBackground: function() {
    var scroll_start = 0;
    var startchange = $("#startchange");
    var offset = startchange.offset();
    if (startchange.length) {
      $(document).scroll(function() {
        scroll_start = $(document).scrollTop();
        if (scroll_start > offset.top) {
          $("#header-nav").addClass("nav-scroll");
        } else {
          $("#header-nav").removeClass("nav-scroll");
        }
      });
    }
  }
};
$("document").ready(function() {
  app.init();
});
