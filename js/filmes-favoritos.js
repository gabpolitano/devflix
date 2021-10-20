function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;

  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela("<h1>" + filmeFavorito + "</h1>");
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">"

  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}