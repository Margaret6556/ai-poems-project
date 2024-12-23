function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML =
      "La courbe de tes yeux fait le tour de mon cœur, Un rond de danse et de douceur, Auréole du temps, berceau nocturne et sûr, Et si je ne sais plus tout ce que j’ai vécu C’est que t";
}


let poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);