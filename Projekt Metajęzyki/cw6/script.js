// Function to fetch the JSON data
function fetchTweets() {
  fetch("tweets.json")
    .then(response => response.json())
    .then(data => renderTweets(data.tweets))
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

    // Create author element
    var authorElement = document.createElement("div");
    authorElement.classList.add("author");

    // Create profile image element
    var profileImageElement = document.createElement("img");
    profileImageElement.src = tweet.author.profileImage;
    profileImageElement.alt = tweet.author.name;
    authorElement.appendChild(profileImageElement);

    // Create author details element
    var authorDetailsElement = document.createElement("div");
    authorDetailsElement.classList.add("author-details");

    // Create author name element
    var authorNameElement = document.createElement("span");
    authorNameElement.classList.add("author-name");
    authorNameElement.textContent = tweet.author.name;
    authorDetailsElement.appendChild(authorNameElement);

    // Create author username element
    var authorUsernameElement = document.createElement("span");
    authorUsernameElement.classList.add("author-username");
    authorUsernameElement.textContent = "@" + tweet.author.username;
    authorDetailsElement.appendChild(authorUsernameElement);

    // Append author details element to author element
    authorElement.appendChild(authorDetailsElement);

    // Create timestamp element
    var timestampElement = document.createElement("div");
    timestampElement.classList.add("timestamp");

    // Convert timestamp string to Date object
    var timestamp = new Date(tweet.timestamp);

    // Format the timestamp
    var formattedTimestamp = formatDate(timestamp);

    // Set the formatted timestamp as the text content
    timestampElement.textContent = formattedTimestamp;

    // Create content element
    var contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.textContent = tweet.content;

    // Create actions element
    var actionsElement = document.createElement("div");
    actionsElement.classList.add("actions");

    // Create retweets element
    var retweetsElement = document.createElement("span");
    retweetsElement.textContent = "Retweets: " + tweet.retweets;

    // Create likes element
    var likesElement = document.createElement("span");
    likesElement.textContent = "Likes: " + tweet.likes;

    // Append all elements to the tweet container
    actionsElement.appendChild(retweetsElement);
    actionsElement.appendChild(likesElement);
    tweetElement.appendChild(authorElement);
    tweetElement.appendChild(timestampElement);
    tweetElement.appendChild(contentElement);
    tweetElement.appendChild(actionsElement);
    tweetsContainer.appendChild(tweetElement);
  });
}

// Function to format the timestamp
function formatDate(timestamp) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return timestamp.toLocaleString(undefined, options);
}

// Call the fetchTweets function to load and render the tweets
fetchTweets();
