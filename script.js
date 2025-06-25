// Dados simulados de carros
const carros = [
  {
    imagem: "https://via.placeholder.com/400x250?text=Carro+1",
    titulo: "Fiat Uno 2020",
    descricao: "Carro em ótimo estado, completo e econômico."
  },
  {
    imagem: "https://via.placeholder.com/400x250?text=Carro+2",
    titulo: "Honda Civic 2018",
    descricao: "Motor VTEC, câmbio automático, muito confortável."
  },
  {
    imagem: "https://via.placeholder.com/400x250?text=Carro+3",
    titulo: "Toyota Corolla 2022",
    descricao: "Zero km, revisões em dia, garantia de fábrica."
  },
  {
    imagem: "https://via.placeholder.com/400x250?text=Carro+4",
    titulo: "Ford Ka 2019",
    descricao: "Versão Titanium, com teto solar e sensor de ré."
  }
];

// Função para criar o post
function criarPost(carro) {
  const div = document.createElement("div");
  div.className = "post";

  div.innerHTML = `
    <img src="${carro.imagem}" alt="${carro.titulo}">
    <div class="post-content">
      <div class="post-title">${carro.titulo}</div>
      <div class="post-description">${carro.descricao}</div>
    </div>
  `;

  return div;
}

// Função para carregar os posts no feed
function carregarPosts() {
  const feed = document.getElementById("feed");

  carros.forEach(carro => {
    const post = criarPost(carro);
    feed.appendChild(post);
  });
}

// Inicializar
window.onload = carregarPosts;