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
