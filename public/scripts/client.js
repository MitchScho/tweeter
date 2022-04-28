/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const data = [
//   {
//     user: {
//       name: "Newton",
//       avatars: "https://i.imgur.com/73hZDYK.png",
//       handle: "@SirIsaac",
//     },
//     content: {
//       text: "If I have seen further it is by standing on the shoulders of giants",
//     },
//     created_at: 1461116232227,
//   },
//   {
//     user: {
//       name: "Descartes",
//       avatars: "https://i.imgur.com/nlhLi3I.png",
//       handle: "@rd",
//     },
//     content: {
//       text: "Je pense , donc je suis",
//     },
//     created_at: 1461113959088,
//   },
// ];
// Uses data passed in through tweet parameter and returns html structured data
const createTweetElement = function (data) {
  const $tweet = $(`<article>
                      <header>
                        <div class="head-image">
                          <img src=${data.user.avatars}>
                          <span class="icon-name">${
                            data.user.name
                          }</span>            
                        </div>            
                        <span class="handle">${data.user.handle}</span>
                      </header>
                      <p>${data.content.text}</p>
                      <footer>
                        <output class="day-count">${timeago.format(
                          data.created_at
                        )}</output>
                        <div class="foot-icon">
                          <i class="fa fa-flag" aria-hidden="true"></i>
                          <i class="fa fa-heart" aria-hidden="true"></i>
                          <i class="fa fa-bolt" aria-hidden="true"></i>
                        </div>
                      </footer>
                    </article>`);

  return $tweet;
};

// Loops through data from database. Every item in the database is passed through the create tweet function and
//then prepended / rendered to the tweet container
const renderTweet = function (data) {
  for (const item of data) {
    $(".tweet-container").prepend(createTweetElement(item));
  }
};

$(document).ready(function () {
  
  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    console.log("event", event);
    const tweetInput = $("#tweet-text").serialize();
    console.log("tweet input", tweetInput);
    if (tweetInput.length > 140) {
      alert("Sorry you have gone over your character allowance");
    } else if (tweetInput === " " || tweetInput === null) {
      alert("Surely you have something to say!");
    } else {
      $.ajax("/tweets", {
        method: "POST",
        data: tweetInput,
        success: (tweetInput) => {
          renderTweet(tweetInput);
          loadTweets();
          
        },
        error: (error) => {
          console.log("error", error);
        },
      });
    }


  });

  const loadTweets = function () {
    $.ajax("/tweets", {
      method: "GET",
      success: (data) => {
        renderTweet(data);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  };
  loadTweets();
});
