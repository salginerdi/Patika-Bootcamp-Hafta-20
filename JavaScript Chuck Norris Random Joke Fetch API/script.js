document.addEventListener("DOMContentLoaded", getJoke);

const jokeTextElement = document.getElementById("joke-text");
const newJokeBtn = document.getElementById("new-joke-btn");

newJokeBtn.addEventListener("click", getJoke);

function getJoke() {
  jokeTextElement.textContent = "Loading...";

  const apiUrl = "https://api.chucknorris.io/jokes/random";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      jokeTextElement.textContent = data.value;
    })
    .catch((error) => {
      console.error("An error has occurred:", error);
      jokeTextElement.textContent =
        "The joke could not be received. Please try again.";
    });
}
