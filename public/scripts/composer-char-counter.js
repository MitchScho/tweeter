$(document).ready(function () {
  $("#tweet-text").on("input", function (e) {
    let counts = 140 - e.target.value.length;
    $("#counter-value").text(counts);
    if (counts < 0) {
      $("#counter-value").addClass("red-text");
    } else {
      $("#counter-value").removeClass("red-text");
    }
  });
});
