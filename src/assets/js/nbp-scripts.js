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

// NbpInputTextComponent
$(document).ready(function () {
  var $nbpInputTextWrapper = $("#nbp-input");
  $nbpInputTextWrapper.on('focusout', function () {
    console.log('$nbpInputTextWrapper: ', $nbpInputTextWrapper.value);
  });
});

// ComposantsComponent
$(document).ready(function () {
  var $nbpComposantsWrapper = $(".nbp-composants-wrapper");
  var $nbpComposantsLink = $(".nbp-composants-link");
  var $nbpComposantsLinkMenu = $(".nbp-nav ul .nbp-composants-link");
  $nbpComposantsLink.on('click', function () {
    $nbpComposantsWrapper.addClass('nbp-display-none');
  });
  $nbpComposantsLinkMenu.on('click', function () {
    $nbpComposantsWrapper.toggleClass('nbp-display-none');
  });
});

// NbpHeaderOneComponent
$(document).ready(function () {
  var $nbpHeaderOneWrapper = $(".nbp-header-one-wrapper").find('.nbp-header-one-profil-content');
  var $nbpHeaderOneProfil = $(".nbp-header-one-profil");
  $nbpHeaderOneProfil.on('click', function () {
    $nbpHeaderOneWrapper.toggleClass('nbp-display-none');
  });
});

// NbpNavbarComponent
$(document).ready(function () {
  var $nbpNavbarsWrapper = $(".nbp-navbar-wrapper");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $nbpNavbarsWrapper
        .addClass("nbp-navbar-top-fixed")
    } else {
      $nbpNavbarsWrapper
        .removeClass("nbp-navbar-top-fixed")
    }
  });
});
