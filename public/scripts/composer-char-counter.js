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

  // //Monitors and displays mouse movement on screen
  // window.addEventListener("mousemove", (event) => {
  //   document.getElementById("x-value").textContent = event.x
  //   document.getElementById("y-value").textContent = event.y
  //     //console.log(` x: ${event.x}, y: ${event.y}`);
  //   });
  // //Texarea listener
  // document.addEventListener("keypress", (event) => {
  //     console.log("event2",event);
  //     // your code here
  //   });
  // document.addEventListener("keypress", (event) => {
  //     console.log("event1", event);
  //     // your code here
  //   });
});
