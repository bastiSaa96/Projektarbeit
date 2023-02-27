async function getData() {
  const response = await fetch("./similarTweets.json");
  const { data } = await response.json();
  return data;
}

async function createTweetCards() {
  const tweets = await getData();
  const divContainer = document.getElementById("similar-tweets-lime");

  console.log(tweets);

  tweets.forEach(tweet => {
    const container = document.createElement("div");
    container.classList.add("similar-tweet");
    container.classList.add("card");

    const textID = document.createElement("h3");
    textID.textContent = tweet.text_id;

    const mainContent = document.createElement("div");
    mainContent.classList.add("similar-tweet__main-content");
    const scoreContainer = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = tweet.text;

    const cosSimContainer = document.createElement("div");
    cosSimContainer.classList.add("score");
    const cosSimHeading = document.createElement("h3");
    const cosSimValueElement = document.createElement("p");
    const cosSimValue = tweet.cos_sim * 100;
    cosSimHeading.textContent = "Cosine-Similarity:";
    cosSimValueElement.textContent = cosSimValue.toFixed(2) + " %";

    const predictionScoreContainer = document.createElement("div");
    predictionScoreContainer.classList.add("score");
    const predictionHeading = document.createElement("h3");
    const predictionValueElement = document.createElement("p");
    const predictionValue = tweet.prediction_score * 100;
    predictionHeading.textContent = "Prediction-Score:";
    predictionValueElement.textContent = predictionValue.toFixed(2) + " %";

    const label = document.createElement("div");

    if (tweet.task_1 === "HOF") {
      label.textContent = "Hate Speech";
      label.classList.add("hatespeech-label");
    } else {
      label.textContent = "No Hate Speech";
      label.classList.add("no-hatespeech-label");
    }

    cosSimContainer.appendChild(cosSimHeading);
    cosSimContainer.appendChild(cosSimValueElement);

    predictionScoreContainer.appendChild(predictionHeading);
    predictionScoreContainer.appendChild(predictionValueElement);

    container.appendChild(textID);
    container.appendChild(mainContent);
    mainContent.appendChild(text);
    scoreContainer.appendChild(cosSimContainer);
    scoreContainer.appendChild(predictionScoreContainer);
    scoreContainer.appendChild(label);

    mainContent.appendChild(scoreContainer);

    divContainer.appendChild(container);
  });
}

createTweetCards();
