const joke_btn = document.getElementById("joke_btn");
const joke_result = document.getElementById("joke_result");

joke_btn.addEventListener("click", getJokes);

getJokes();

async function getJokes() {
  const response = await fetch(" https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  //   console.log(data);
  joke_result.innerHTML = data.joke;
}
