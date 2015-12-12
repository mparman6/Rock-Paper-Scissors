$(document).ready(function() {
  var compPicks = ["Rock", "Paper", "Scissors"];
  var randomPick = Math.floor(Math.random() * compPicks.length);

  $('#start').on('click', function() {
    $('.hidden').toggleClass("hidden");
    $('.hidden').toggleClass("off");
  });

  $("#rock").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    $("#opp").fadeIn(250, function() {
      $(this).html(compPicks[randomPick]);
    });

    $("#you").html("Rock");
  });

  $("#paper").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    $("#opp").fadeIn(250, function() {
      $(this).html(compPicks[randomPick]);
    });

    $("#you").html("Paper");
  });

  $("#scissors").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    $("#opp").fadeIn(250, function() {
      $(this).html(compPicks[randomPick]);
    });

    $("#you").html("Scissors");
  });

});