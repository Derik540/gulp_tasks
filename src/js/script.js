let nomesDasImagens = [];

window.onload = function () {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", function () {
      nomesDasImagens.push(this.getAttribute("name"));
      console.log(nomesDasImagens);
    });
  });
};
