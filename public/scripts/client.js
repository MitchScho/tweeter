/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const createTweetElement = function (tweet) {
  const $tweet = $(`<article>
                      <header>
                        <div class="head-image">
                          <img src=${tweet.user.avatars}>
                          <span class="icon-name">${tweet.user.name}</span>            
                        </div>            
                        <span class="handle">${tweet.user.handle}</span>
                      </header>
                      <p>${tweet.content.text}</p>
                      <footer>
                        <output class="day-count">${tweet.created_at}</output>
                        <div class="foot-icon">
                          <i class="fa fa-flag" aria-hidden="true"></i>
                          <i class="fa fa-heart" aria-hidden="true"></i>
                          <i class="fa fa-bolt" aria-hidden="true"></i>
                        </div>
                      </footer>
                    </article>`);
                          

  return $tweet;
};

// const $tweet = createTweetElement(tweetdata);
// console.log("tweet", $tweet);
// $(".tweet-container").append($tweet);

const renderTweet = function (data) {
  for (const item of data) {
    console.log("data item", item);
    $(".tweet-container").prepend(createTweetElement(item));
  }
};

$(document).ready(function () {
  renderTweet(data);
});
