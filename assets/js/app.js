//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.changeNavBackground();
    app.handleTogglerClick();
  },
  changeNavBackground: function() {
    var scroll_start = 0;
    var startchange = $("#startchange");
    var offset = startchange.offset();
    if (startchange.length) {
      $(document).scroll(function() {
        scroll_start = $(document).scrollTop();
        if (scroll_start > offset.top) {
          $("#nav-header").addClass("nav-scroll");
          $("#nav-header").removeClass("btn-active");
        } else {
          $("#nav-header").removeClass("nav-scroll");
          $(".navbar-collapse").removeClass("show");
        }
      });
    }
  },
  handleTogglerClick: function() {
    var scroll_start = 0;
    var startchange = $("#startchange");
    var offset = startchange.offset();
    $(".navbar-toggler").click(function() {
      scroll_start = $(document).scrollTop();
      if (!scroll_start > offset.top)
        $("#nav-header").toggleClass("btn-active");
    });
  }
};
$("document").ready(function() {
  app.init();
});
