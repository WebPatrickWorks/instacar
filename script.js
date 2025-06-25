function truncarTexto(texto, limitePalavras) {
  const palavras = texto.split(" ");
  if (palavras.length <= limitePalavras) return texto;
  return palavras.slice(0, limitePalavras).join(" ") + "...";
}

// Dados simulados de carros (agora com curtidas, comentários e compartilhamentos)
const carros = [
  {
    imagem: "images/uno.png",
    titulo: "Fiat Uno 2020",
    descricao: "Fiat Uno 2022 em excelente estado de conservação, ideal para quem busca um carro confiável, completo e econômico. Equipado com ar-condicionado, direção hidráulica, vidros e travas elétricas, som Bluetooth e comandos no volante. Motor econômico e ágil, perfeito tanto para o dia a dia na cidade quanto para viagens. Todas as revisões em dia, pneus novos e documentação 100% regular. Veículo de procedência, muito bem cuidado e pronto para rodar sem dor de cabeça.",
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
    descricao: "Honda Civic 2018 com motor VTEC de alto desempenho, oferecendo excelente resposta e economia. Equipado com câmbio automático suave e preciso, proporcionando uma condução extremamente confortável e agradável. O interior é espaçoso, com acabamento refinado e ergonomia que valoriza o bem-estar do motorista e passageiros. Conta com central multimídia, ar-condicionado digital, controle de estabilidade, direção elétrica progressiva e airbags frontais e laterais. Um sedã completo, confiável e pronto para te acompanhar com segurança e estilo no dia a dia ou em viagens.",
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
    descricao: "Toyota Corolla 2022 absolutamente zero quilômetro, em estado impecável de conservação, sem detalhes.",
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
    descricao: "Ford Ka 2019 na versão Titanium, a mais completa da linha, oferecendo excelente equilíbrio entre conforto, tecnologia e desempenho. Equipado com teto solar elétrico, que proporciona mais luminosidade e ventilação ao interior, e sensor de ré que facilita manobras e aumenta a segurança no dia a dia. O carro conta ainda com central multimídia SYNC 3 com tela sensível ao toque, ar-condicionado digital, direção elétrica, rodas de liga leve e acabamento interno refinado. Motor potente e econômico, ideal para quem busca um hatch moderno, completo e pronto para rodar com estilo.",
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
        <div class="left-buttons">
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

        <!-- Botão Favorito à direita -->
        <button class="interaction-btn favorite">
        ⭐ <span>0</span>
        </button>
    </div>

    <div class="post-title">${carro.titulo}</div>

    <!-- Descrição com "mais" -->
        <div class="description-container">
        <span class="description-text clickable" data-full="${carro.descricao}">
            ${truncarTexto(carro.descricao, 30)}
        </span>
        </div>
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


document.addEventListener("click", function(e) {
  const texto = e.target.closest(".description-text.clickable");
  if (!texto) return;

  const container = texto.closest(".description-container");

  const isFull = container.classList.contains("full");

  // Alterna entre truncado e completo
  if (isFull) {
    texto.textContent = truncarTexto(texto.dataset.full, 30);
  } else {
    texto.textContent = texto.dataset.full;
  }

  container.classList.toggle("full");
});

document.addEventListener("click", function(e) {
  if (e.target.closest(".favorite")) {
    const btn = e.target.closest(".favorite");
    const span = btn.querySelector("span");
    let favs = parseInt(span.textContent);
    span.textContent = favs + 1;
  }
  if (e.target.closest(".like")) {
    const btn = e.target.closest(".like");
    const span = btn.querySelector("span");
    let favs = parseInt(span.textContent);
    span.textContent = favs + 1;
  }
});


