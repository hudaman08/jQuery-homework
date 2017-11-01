$(document).ready(function() {
  $("div.upper").hide(3000);
  $("div.upper").show(3000);

  $("div.lower").fadeOut(3000);
  $("div.lower").fadeIn(3000);

  $("div.middle").slideUp(3000);
  $("div.middle").slideDown(3000);

  $("div.left").animate({
    width: "30%",
  }, 3000);

  $("div.left").css("background-color","red");

  $("div.right").animate({
    width: "0%",
  }, 3000);

  // FIXME: can you combine two actions without an event trigger?

  //   , function() {
  //     $(".box").animate({
  //       width: 100,
  //       height: 100,
  //       opacity: 0.5
  //     }, 2000);
  //   });
  // });

});
