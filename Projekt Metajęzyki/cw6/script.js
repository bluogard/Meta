
function fetchTweets() {
  fetch("http://localhost:8080/") 
    .then(response => response.json())
    .then(data => renderTweets(data))

    .catch(error => console.error("Error fetching tweets:", error));
}

// Function to render the tweets on the page
function renderTweets(tweets) {
  var tweetsContainer = document.getElementById("tweets");

  // Clear the tweets container
  tweetsContainer.innerHTML = "";

  // Loop through the tweets data and create tweet elements
  tweets.forEach(function(tweet) {
    // Create tweet element
    var tweetElement = document.createElement("div");
    tweetElement.classList.add("tweet");


    // Create profile image element
    var profileimageElement = document.createElement("img");
    profileimageElement.src = tweet.profileimage;
    profileimageElement.alt = tweet.username;
    tweetElement.appendChild(profileimageElement);

    // Create username element
    var usernameElement = document.createElement("div");
    usernameElement.classList.add("username");
    usernameElement.textContent = "@" + tweet.username;
    tweetElement.appendChild(usernameElement);

    // Create timestamp element
    var tweettimeElement = document.createElement("div");
    tweettimeElement.classList.add("tweettime");
    tweettimeElement.textContent = tweet.tweettime;
    tweetElement.appendChild(tweettimeElement);

    var formattedTimestamp = formatTimestamp(tweet.tweettime);
    tweettimeElement.textContent = formattedTimestamp;

    tweetElement.appendChild(tweettimeElement);

    // Create content element
    var contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.textContent = tweet.content;
    tweetElement.appendChild(contentElement);

    // Create likes element
    var likesElement = document.createElement("div");
    likesElement.classList.add("likes");
    likesElement.textContent = "Likes: " + tweet.likes;
    tweetElement.appendChild(likesElement);

    // Create retweets element
    var retweetsElement = document.createElement("div");
    retweetsElement.classList.add("retweets");
    retweetsElement.textContent = "Retweets: " + tweet.retweets;
    tweetElement.appendChild(retweetsElement);

    // Append tweet element to tweets container
    tweetsContainer.appendChild(tweetElement);
  });
}
function formatTimestamp(timestamp) {
  var date = new Date(timestamp);
  var options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

