$(document).ready(function() {
  var compPicks = ["Rock", "Paper", "Scissors"];
  var randomPick = Math.floor(Math.random() * compPicks.length);

  // Click on start button to reveal game
  $("#start").on("click", function() {
    $(".hidden").toggleClass("hidden");
    $(".hidden").toggleClass("off");
  });

  // Add click events to user choices
  // and show their choice
  $("#rock").on("click", function() {
   $("#userChoice").html("Rock");
  });
  $("#paper").on("click", function() {
   $("#userChoice").html("Paper");
  });
  $("#scissors").on("click", function() {
   $("#userChoice").html("Scissors");
  });

  // Randomly generate computer choice
  // and show it 
  $("#rock").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    $("#compChoice").html(compPicks[randomPick]);
    });
  $("#paper").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    $("#compChoice").html(compPicks[randomPick]);
    });
    
  $("#scissors").on("click", function() {
    var randomPick = Math.floor(Math.random() * compPicks.length);
    $("#compChoice").html(compPicks[randomPick]);
    });

});