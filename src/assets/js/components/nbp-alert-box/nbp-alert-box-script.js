// Close NbpAlertBoxComponent
$(document).ready(function () {
  var $nbpAlertBoxWrapper = $(".nbp-alert-box-wrapper");
  $(".nbp-alert-box-icon-close").click(function () {
    $nbpAlertBoxWrapper.addClass("nbp-display-none");
  });
});
