function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#typewriter", {
    strings: [
      "La courbe de tes yeux fait le tour de mon cœur, Un rond de danse et de douceur, Auréole du temps, berceau nocturne et sûr, Et si je ne sais plus tout ce que j’ai vécu C’est que t",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
