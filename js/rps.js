$(document).ready(function() {
  var compPicks = ["Rock", "Paper", "Scissors"];
  var randomPick = Math.floor(Math.random() * compPicks.length);
  var computerPick;
  var userPick;
  var userScore = 0
  var compScore = 0
  var roundCount = 0

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
    userPick = $(this).attr("data-choice");
    gameResults();
    roundReset();
    $("#comp").html(computerPick);
  });

  $(".user").on("click", function() {
    $("#you").html(userPick);
  });

  // function for if else comparisons 
  function gameResults() {
    if (userPick === computerPick) {
      $("#result").html("It's a tie!");
    } else if (userPick === "Rock")
      if (computerPick === "Paper") {
        $("#result").html("Computer Wins");
        compScore++
        $("#compWins").html(compScore);
      } else if (userPick === "Rock") {
      if (computerPick === "Scissors") {
        $("#result").html("You Win!");
        userScore++
        $("#userWins").html(userScore)
      }
    } if (userPick === "Paper") {
      if (computerPick === "Rock") {
        $("#result").html("You Win!");
        userScore++
        $("#userWins").html(userScore)
      }
    } if (userPick === "Paper") {
      if (computerPick === "Scissors") {
        $("#result").html("Computer Wins");
        compScore++
        $("#compWins").html(compScore);
      }
    } if (userPick === "Scissors") {
      if (computerPick === "Rock") {
        $("#result").html("Computer Wins");
        compScore++
        $("#compWins").html(compScore);
      }
    }if (userPick === "Scissors") {
      if (computerPick === "Paper") {
        $("#result").html("You Win!");
        userScore++
        $("#userWins").html(userScore);
      }
    }
  }

  function roundReset() {
    if (userScore === 3) {
      $(".modal-body").html("YOU WIN!    Reload page to play again!");
      $("#modal").modal();
      roundCount++
      $("#roundCount").html(roundCount);
    } if (compScore === 3) {
      roundCount++
      $(".modal-body").html("YOU LOSE!   Reload page to play again!");
      $("#modal").modal();
      $("#roundCount").html(roundCount);
    }
  }
});