$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Перезвоним в течении 5 минут!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

/**Pages**/

AOS.init(); /*Animation*/
$(document).ready(function() {
  $("#fullpage").fullpage({
    anchors: ["Main", "AboutUs", "Request", "AboutTransport", "Contacts"],
    menu: "#menu",
    css3: true,
    scrollBar: true
  });
});

/**NavBar Mobile**/
$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  //
  $("body").toggleClass("open");
});

$(".overlay a").on("click", function() {
  $(".overlay").removeClass("open");
  $("#navToggle").removeClass("active");
  $(".main").removeClass("blur");
  $(".main").toggleClass("unblur");
});

$("#navToggle").click(function() {
  $(".main").toggleClass("blur");
  $(".main").removeClass("unblur");
});

$(".logo-adaptive-screen").on("click", function() {
  $(".overlay").removeClass("open");
  $("#navToggle").removeClass("active");
  $(".main").removeClass("blur");
  $(".main").toggleClass("unblur");
});
