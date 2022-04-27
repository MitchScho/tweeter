/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
[
{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1650848061786
},
{
  "user": {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd"
  },
  "content": {
    "text": "Je pense , donc je suis"
  },
  "created_at": 1650934461786
}
]

$(document).ready(function () {

  const createTweetElement = function (data) {
    const $avatar = $(`<i class="fa fa-user" aria-hidden="true"></i>`);
    const $name = $(`<span class="icon-name">Mitchell Schofield</span>`);
    const $handle = $(`<span class="handle">@handle</span>`);
    //const $tweet = $(`<article class="tweet">Hello world</article>`);
    return $tweet;
  }


  const renderTweet = function (data) {
    let newTweet = [];
    for (item in data) {
      newTweet.append(createTweetElement(item));
    }
    $('tweet-container').append(newTweet);
  }
})

