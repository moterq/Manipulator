$(document).ready(function() {
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var mail = $("#mail");

  mail.blur(function() {
    if (mail.val() != "") {
      if (mail.val().search(pattern) == 0) {
        mail.removeClass("error").addClass("ok");
      } else {
        $("#submit").attr("disabled", true);
        mail.addClass("error");
      }
    } else {
      mail.addClass("error");
      $("#submit").attr("disabled", true);
    }
  });
});
