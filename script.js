const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-318";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        console.log('API Response:', item); // Log the entire response object
        // Check if 'joke' property exists in the response
        if (item.joke) {
            jokeContainer.textContent = item.joke;
        } else {
            jokeContainer.textContent = "Sorry, couldn't fetch a joke at the moment.";
        }
        jokeContainer.classList.add("fade");
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        jokeContainer.textContent = "An error occurred while fetching the joke. Please try again later.";
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke);
getJoke(); 