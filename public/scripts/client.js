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
    
    const $tweet = $(`<section class="tweet-container">
        <article>
          <header class="article-head">
            <div>
              <i${user.avatars}></i>
              <span class="icon-name">${user.name}</span>            
            </div>            
            <span class="handle">${user.handle}</span>
          </header>
          <p>${content.text}</p>
          <footer class="article-foot">
            <output class="day-count">${created_at}</output>
            <div id="foot-icon">
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-bolt" aria-hidden="true"></i>
            </div>
          </footer>
        </article>
      </section>`);
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

