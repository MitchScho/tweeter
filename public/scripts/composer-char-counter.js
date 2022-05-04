$(document).ready(function () {
  $("#tweet-text").on("input", onInput);
});

const onInput = function (e) {
    
    let charCount = 140 - e.target.value.length;
    const $counter = $("#counter-value");
    $counter.text(charCount);

    if (charCount < 0) {
      return $counter.addClass("red-text");
    }
    $counter.removeClass("red-text");
  };