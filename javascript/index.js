function displayPoem(response) {
  new Typewriter("#typewriter", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "39284b94tea8fb240cc5d3o3a355d5a0";
  let prompt = `Generate a French poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert. Who loves to create French poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${prompt}`);

  let poemFormElement = document.querySelector("poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);
}
