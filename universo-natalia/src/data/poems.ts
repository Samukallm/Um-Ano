export interface PlanetConfig {
  size: number;       // Tamanho em pixels (ex: 60, 80, 120)
  color: string;      // Cor base do planeta (ex: '#ffb6c1')
  orbitRadius: number; // Distância do centro do universo
  speed: number;      // Tempo para dar uma volta completa (em segundos)
}

export interface Poem {
  id: string;
  title: string;
  content: string[]; // Array de estrofes para facilitar a formatação
  planet: PlanetConfig;
}

export const poems: Poem[] = [
  {
    id: "meu-amor",
    title: "Meu Amor",
    content: [
      "Meu amor,",
      "",
      "Eu te amo tanto que, se um dia — nesta vida ou em qualquer outra — eu fosse obrigado a partir para o espaço, levaria comigo apenas um único pedaço de papel com o seu nome escrito.",
      "",
      "Quando chegasse ao destino mais distante que pudesse alcançar, eu soltaria esse papel no vazio do universo com um leve impulso.",
      "",
      "A distância entre você e esse papel seria o tamanho do meu amor por você.",
      "",
      "E ele jamais pararia de viajar pelo infinito, atravessando estrelas, galáxias e talvez até outros universos, levando consigo a prova do que sinto.",
      "",
      "E, ainda assim, tudo isso representaria apenas 1% do quanto você é especial para mim."
    ],
    planet: {
      size: 120,
      color: "linear-gradient(135deg, #ff85a1, #ff3d7f)",
      orbitRadius: 180,
      speed: 20
    }
  },
  {
    id: "constelacoes",
    title: "Constelações",
    content: [
      "Cada alma no mundo é representada por uma estrela no universo.",
      "",
      "Existem infinitas estrelas, cada vez mais e mais, e em meio a essa imensidão de estrelas que passam despercebidas, existe uma constelação formada por apenas duas almas:",
      "",
      "eu e você."
    ],
    planet: {
      size: 80,
      color: "linear-gradient(135deg, #c7d2fe, #818cf8)",
      orbitRadius: 320,
      speed: 38
    }
  },
  {
    id: "a-lua",
    title: "A Lua",
    content: [
      "Assim como a Lua ilumina a Terra quando toda a luz se vai embora, você, meu amor, ilumina minha vida quando estou triste, cabisbaixo ou desanimado.",
      "",
      "É saber que existe a sua presença, mesmo que distante, e que só de pensar em você, minha escuridão começa a desaparecer.",
      "",
      "Creio que amar você seja encontrar a perfeição em ti, mesmo quando não posso te ver todos os dias.",
      "",
      "É saber que, mesmo distante, você ainda é a luz que encontra o caminho até mim."
    ],
    planet: {
      size: 90,
      color: "linear-gradient(135deg, #f8f4e3, #4179ce)",
      orbitRadius: 250,
      speed: 30
    }
  },
  {
    id: "buraco-negro",
    title: "Buraco Negro",
    content: [
      "Existem forças infinitas no espaço, que moldam tudo ao seu redor.",
      "",
      "Em uma vida passada, quando encontrei você pela primeira vez, minha paixão foi de tal tamanho que, em todos os universos, em todas as vidas, em todas as probabilidades, eu sempre irei me apaixonar por você."
    ],
    planet: {
      size: 100,
      color: "linear-gradient(135deg, #0b0c10, #1f2833)",
      orbitRadius: 380,
      speed: 28
    }
  },
  {
    id: "o-fim",
    title: "O Fim",
    content: [
      "Após uma vida inteira contigo, uma vida de imensa alegria, uma vida de imenso amor, quando nossas estrelas partirem e se recriarem, eu escolheria refazer todos os caminhos que me levaram a conhecer o amor das minhas vidas presentes e passadas.",
      "",
      "Pois não há sentido algum em viver sem conhecer você, sem amar você."
    ],
    planet: {
      size: 70,
      color: "linear-gradient(135deg, #1e3c72, #2a5298)",
      orbitRadius: 450,
      speed: 50
    }
  }
];