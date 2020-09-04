var queixaprincipal = document.querySelector(".queixa");

queixaprincipal.options.length = 0;

let url = "https://assina-prontuario.herokuapp.com/queixas";

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    for (i in out.data) {
      option = new Option(out.data[i].label, out.data[i].id);
      queixaprincipal.options[queixaprincipal.options.length] = option;
    }
  })
  .catch((err) => {
    throw err;
  });
