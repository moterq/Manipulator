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

/**Links */

// $(document).ready(function() {
//   $("#fullpage").fullpage({
//     anchors: ["block1", "block2", "block3", "block4", "block5"],
//     menu: "#menu",
//     css3: true,
//     scrollingSpeed: 1000
//   });
// });

/*Bubble text*/

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
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
