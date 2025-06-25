// Dados simulados de carros (agora com curtidas, comentários e compartilhamentos)
const carros = [
  {
    imagem: "images/uno.png",
    titulo: "Fiat Uno 2020",
    descricao: "Carro em ótimo estado, completo e econômico.",
    curtidas: 12,
    comentarios: 3,
    compartilhamentos: 2,
    usuario: {
      foto: "https://i.pravatar.cc/60",  // Foto do vendedor
      nome: "João_Silva"
    }
  },
  {
    imagem: "images/civic.png",
    titulo: "Honda Civic 2018",
    descricao: "Motor VTEC, câmbio automático, muito confortável.",
    curtidas: 25,
    comentarios: 7,
    compartilhamentos: 5,
    usuario: {
      foto: "https://i.pravatar.cc/60",  // Foto do vendedor
      nome: "Jorge_Mateus"
    }
  },
  {
    imagem: "images/corolla.png",
    titulo: "Toyota Corolla 2022",
    descricao: "Zero km, revisões em dia, garantia de fábrica.",
    curtidas: 34,
    comentarios: 9,
    compartilhamentos: 10,
    usuario: {
      foto: "https://i.pravatar.cc/60",  // Foto do vendedor
      nome: "RobertMorrone"
    }
  },
  {
    imagem: "images/ford-ka.png",
    titulo: "Ford Ka 2019",
    descricao: "Versão Titanium, com teto solar e sensor de ré.",
    curtidas: 18,
    comentarios: 4,
    compartilhamentos: 1,
    usuario: {
      foto: "https://i.pravatar.cc/60",  // Foto do vendedor
      nome: "TiagoSilva"
    }
  }
];

// Função para criar o post
function criarPost(carro) {
  const div = document.createElement("div");
  div.className = "post";

  div.innerHTML = `
    <div class="post-header-overlay">
        <div class="user-info">
        <img src="${carro.usuario.foto}" alt="Foto de ${carro.usuario.nome}" class="user-avatar">
        <span class="user-name">${carro.usuario.nome}</span>
        </div>
        <button class="btn-perfil">Perfil</button>
    </div>
    <img src="${carro.imagem}" alt="${carro.titulo}">
    <div class="post-content">
      <div class="post-interactions">
        <button class="interaction-btn like">
          ❤️ <span>${carro.curtidas}</span>
        </button>
        <button class="interaction-btn comment">
          💬 <span>${carro.comentarios}</span>
        </button>
        <button class="interaction-btn share">
          📤 <span>${carro.compartilhamentos}</span>
        </button>
      </div>
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