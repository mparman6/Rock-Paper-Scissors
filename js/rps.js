$(document).ready(function() {
  $('#start').on('click', function() {
    $('.hidden').toggleClass("hidden");
    $('.hidden').toggleClass("");
  });
});