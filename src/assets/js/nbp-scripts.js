// import nbpScrollTopScript from "./components/nbp-scroll-top/nbp-scroll-top-script";
// import nbpAlertBoxScript from "./components/nbp-alert-box/nbp-alert-box-script";

// Url to bak end -  See: https://github.com/randrin/Server-Components
var baseUrl = "http://localhost:9192";
// var baseUrl = 'http://nbpservices-env.eba-zmyykfw3.eu-central-1.elasticbeanstalk.com';

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
  $nbpInputTextWrapper.on("focusout", function () {
    console.log("$nbpInputTextWrapper: ", $nbpInputTextWrapper.value);
  });
});

// ComposantsComponent
$(document).ready(function () {
  var $nbpComposantsWrapper = $(".nbp-composants-wrapper");
  var $nbpComposantsLink = $(".nbp-composants-link");
  var $nbpComposantsLinkMenu = $(".nbp-nav ul .nbp-composants-link");
  $nbpComposantsLink.on("click", function () {
    $nbpComposantsWrapper.addClass("nbp-display-none");
  });
  $nbpComposantsLinkMenu.on("click", function () {
    $nbpComposantsWrapper.toggleClass("nbp-display-none");
  });
});

// NbpHeaderOneComponent
$(document).ready(function () {
  var $nbpHeaderOneWrapper = $(".nbp-header-one-wrapper").find(
    ".nbp-header-one-profil-content"
  );
  var $nbpHeaderOneProfil = $(".nbp-header-one-profil");
  $nbpHeaderOneProfil.on("click", function () {
    $nbpHeaderOneWrapper.toggleClass("nbp-display-none");
  });
});

// NbpNavbarComponent
$(document).ready(function () {
  var $nbpNavbarWrapper = $(".nbp-navbar-wrapper");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $nbpNavbarWrapper.addClass("nbp-navbar-top-fixed");
    } else {
      $nbpNavbarWrapper.removeClass("nbp-navbar-top-fixed");
    }
  });
});

// NbpCheckboxComponent
$(document).ready(function () {
  var $nbpCheckboxWrapper = $(".nbp-checkbox-wrapper");
  var $nbpCheckboxInput = $nbpCheckboxWrapper.find(".nbp-checkbox-input");
  var $nbpCheckboxLabel = $nbpCheckboxWrapper.find(".nbp-checkbox-label");

  $nbpCheckboxInput.on("click", function () {
    $(this).toggleClass("checked");
    $(this).find(".nbp-checkbox-icon-check").toggleClass("nbp-display-none");
  });
  $nbpCheckboxLabel.on("click", function () {
    $nbpCheckboxInput.toggleClass("checked");
    $nbpCheckboxInput
      .find(".nbp-checkbox-icon-check")
      .toggleClass("nbp-display-none");
  });
});

// NbpRadioComponent
$(document).ready(function () {
  var $nbpRadioWrapper = $(".nbp-radio-wrapper");
  var $nbpRadioInput = $nbpRadioWrapper.find(".nbp-radio-input");
  var $nbpRadioLabel = $nbpRadioWrapper.find(".nbp-radio-label");

  console.log("$nbpRadioInput: ", $nbpRadioInput);

  $nbpRadioInput.on("click", function () {
    var nbpRadioClicked = $nbpRadioInput.index(this);
    var $currentNbpRadio = $(this);
    console.log("Index clicked: ", nbpRadioClicked);

    Array.from($nbpRadioInput).forEach((nbpRadio, index) => {
      console.log("nbpRadio clicked: ", nbpRadio);
      if (nbpRadioClicked == index) {
        $currentNbpRadio.toggleClass("checked");
        $currentNbpRadio
          .find(".nbp-radio-circle-icon")
          .toggleClass("nbp-display-none");
      }
    });
  });
  // $nbpRadioLabel.on('click', function () {
  //   Array.from($nbpRadioWrapper).forEach((nbpRadio, index) => {
  //     console.log('nbpRadioInput: ', index);
  //     console.log('nbpRadio: ', nbpRadio);
  //     console.log('nbpRadio $(this): ', $(this));
  //     $(this).toggleClass('checked');
  //   $nbpRadioInput.toggleClass('checked');
  //   $nbpRadioInput.find('.nbp-radio-circle-icon').toggleClass('nbp-display-none')
  //   });

  // })
});

// NbpTablesComponent
$(document).ready(function () {
  "use strict";
  var $nbpTableOneWrapper = $(".nbp-table-one-wrapper");
  var $nbpDataTablesFilter = $nbpTableOneWrapper.find(".dataTables_filter");
  $nbpDataTablesFilter.addClass("nbp-display-none");

  console.log("$nbpDataTablesFilter: ", $nbpDataTablesFilter);

  // var $label = document.getElementsByClassName("dataTables_filter").addClass('nbp-display-none');
  // console.log('$label: ', $label.length)

  Array.from(document.getElementsByClassName("dataTables_filter")).forEach(
    function (item) {
      console.log(item);
    }
  );
})






