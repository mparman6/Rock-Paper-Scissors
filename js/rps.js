$(document).ready(function() {
  var compPicks = ["Rock", "Paper", "Scissors"];
  var randomPick = Math.floor(Math.random() * compPicks.length);
  var computerPick;
  var userPick;


  // Click on start button to reveal game
  $("#start").on("click", function() {
    $(".hidden").toggleClass("hidden");
    $(".hidden").toggleClass("off");
  });

  // Add click events to user choices
  // and show their choice
  $(".user").on("click", function() {
   var randomPick = Math.floor(Math.random() * compPicks.length);
   computerPick = compPicks[randomPick];
   userPick = compPicks[this.id];
   $("#comp").html(computerPick);
  });

  $(".user").on("click", function() {
    $("#you").html([this.id]);
  });

function gameLogic(userPick, computerPick) {
  if(userPick === computerPick) {
    $("#userWins").html("You got a tie!");
  } else if (userPick === "Rock") {
    if(computerPick === "Paper") {
      $("#compWins").html("1");
    } else {
      $("#userWins").html("1");
    }
  }
}
});

