// import nbpScrollTopScript from "./components/nbp-scroll-top/nbp-scroll-top-script";
// import nbpAlertBoxScript from "./components/nbp-alert-box/nbp-alert-box-script";


// Go to Top Page & Scroll Navbar Effet
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 260) {
      $("body")
        .find("#nbp-scroll-top-wrapper")
        .addClass("nbp-scroll-top")
        .fadeIn();
    } else {
      $("body")
        .find("#nbp-scroll-top-wrapper")
        .removeClass("nbp-scroll-top")
        .fadeOut();
    }
  });
  $("#nbp-scroll-top-wrapper").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

// Close NbpAlertBoxComponent
$(document).ready(function () {
  var $nbpAlertBoxWrapper = $(".nbp-alert-box-wrapper");
  $(".nbp-alert-box-icon-close").click(function () {
    $nbpAlertBoxWrapper.addClass("nbp-display-none");
  });
});