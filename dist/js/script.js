let nomesDasImagens=[];window.onload=function(){document.querySelectorAll("img").forEach(e=>{e.addEventListener("click",function(){nomesDasImagens.push(this.getAttribute("name")),console.log(nomesDasImagens)})})};