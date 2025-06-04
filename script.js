// 🔮 Mapeamento dos arquétipos
const archetypes = {
  1: { name: "A Chave", meaning: "solução, revelação, sabedoria prática" },
  2: { name: "A Serpente", meaning: "transformação, tentação, verdade crua" },
  3: { name: "A Criança", meaning: "inocência, espontaneidade, nascimento interior" },
  4: { name: "A Floresta", meaning: "mistério interior, busca ancestral" },
  5: { name: "A Estrela", meaning: "esperança, inspiração, proteção espiritual" },
  6: { name: "A Morte", meaning: "fim necessário, renascimento, ruptura" },
  7: { name: "A Espiral", meaning: "movimento cíclico, evolução, repetição transformadora" },
  8: { name: "O Portal", meaning: "transição, novas possibilidades, limiar de mudança" },
  9: { name: "O Coração", meaning: "emoção pura, verdade afetiva, conexão" },
  10: { name: "A Borboleta", meaning: "metamorfose, liberdade interior, leveza" },
  11: { name: "O Espelho", meaning: "autoconhecimento, reflexo, projeções" },
  12: { name: "A Máscara", meaning: "persona, aparência, o que está por trás" }
};

let chosenSequence = [];

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const finalMessage = document.getElementById("final-message");
  const sequenceResult = document.getElementById("sequence-result");
  const cardAdvice = document.getElementById("card-advice");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("clicked") && chosenSequence.length < 3) {
        const id = parseInt(card.dataset.id);
        chosenSequence.push(id);
        card.classList.add("clicked");
        card.style.opacity = "0";
        card.style.pointerEvents = "none";

        if (chosenSequence.length === 3) {
          setTimeout(showResults, 500);
        }
      }
    });
  });

  function showResults() {
    finalMessage.classList.remove("hidden");

    // Sequência escolhida
    const journey = chosenSequence.map((id, index) => {
      const archetype = archetypes[id];
      return `<p><strong>${index + 1}.</strong> ${archetype.name}: <em>${archetype.meaning}</em></p>`;
    }).join("");
    sequenceResult.innerHTML = `<h3>Sua sequência:</h3>${journey}`;

    // Define as cartas que não foram escolhidas (mesmo as que estão "invisíveis")
    const allIds = Object.keys(archetypes).map(Number);
    const remaining = allIds.filter(id => !chosenSequence.includes(id));

    // Sorteia uma carta-conselho das restantes
    const randomIndex = Math.floor(Math.random() * remaining.length);
    const adviceCard = archetypes[remaining[randomIndex]];

    cardAdvice.innerHTML = `
      <h3>🌟 Carta-Conselho: <span style="color:#93c5fd">${adviceCard.name}</span></h3>
      <p>${capitalize(adviceCard.meaning)}. Confie neste símbolo como um guia para o próximo passo da sua jornada.</p>
      <p style="margin-top:1em; font-style: italic;">🌒 Com carinho, Lua Cósmica Tarot.</p>
    `;
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
