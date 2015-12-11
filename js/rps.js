$(document).ready(function() {
  var compPicks = ["Rock", "Paper", "Scissors"];

  $('#start').on('click', function() {
    $('.hidden').toggleClass("hidden");
    $('.hidden').toggleClass("off");
  });

  $(".weapon").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    alert("it works");
  });

});