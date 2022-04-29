// Uses data passed in through tweet parameter and returns secure html structured data
const createTweetElement = function (data) {
  const escape = function (str) {
    let tweet = document.createElement("tweet");
    tweet.appendChild(document.createTextNode(str));
    return tweet.innerHTML;
  };
  const $tweet = $(`<article>
                      <header>
                        <div class="head-image">
                          <img src=${data.user.avatars}>
                          <span class="icon-name">${data.user.name}</span>            
                        </div>            
                        <span class="handle">${data.user.handle}</span>
                      </header>
                      <p>${escape(data.content.text)}</p>
                      <footer>
                        <output class="day-count">${timeago.format(data.created_at)}</output>
                        <div class="foot-icon">
                          <i class="fa fa-flag" aria-hidden="true"></i>
                          <i class="fa fa-retweet" aria-hidden="true"></i>
                          <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                      </footer>
                    </article>`);

  return $tweet;
};

// Loops through data from database. Every item in the database is passed through the create tweet function and
//then prepended / rendered to the tweet container
const renderTweet = function (data) {
  for (const item of data) {
    $("#tweet-container").prepend(createTweetElement(item));
  }
};

$(document).ready(function () {
  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    
    const tweetInput = $("#tweet-text").serialize();
    const inputText = $("#tweet-text").val();
    
    if (inputText.length > 140) {
      $("#error").html(`<div class="error-flex">
                          <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                          <span>! Sorry you have exceeded your character allowance !</span>
                          <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                        </div>`);
      $("#error").slideDown();
      setTimeout(() => { $("#error").slideUp(); }, 1500);
      
    } else if (!inputText) {
      $("#error").html(`<div class="error-flex">
                          <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                          <span>! Are you sure there isn't anything you want to say? !</span>
                          <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                        </div>`);
      $("#error").slideDown();
      setTimeout(() => { $("#error").slideUp(); }, 1500);
      
    } else {

      $.ajax("/tweets", {
        method: "POST",
        data: tweetInput,
        success: (tweetInput) => {
          renderTweet(tweetInput);
          loadTweets();
          $(this).trigger("reset");
        },
        error: (error) => {
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
      },
    });
  };
  loadTweets();
});
