// Mapeamento simbólico das imagens
const archetypes = {
  1: { name: "A Floresta", meaning: "mistério interior, busca ancestral" },
  2: { name: "A Serpente", meaning: "transformação, tentação, verdade crua" },
  3: { name: "A Criança", meaning: "inocência, espontaneidade, nascimento interior" },
  4: { name: "A Estrela", meaning: "esperança, inspiração, proteção espiritual" },
  5: { name: "A Morte", meaning: "fim necessário, renascimento, ruptura" },
  6: { name: "A Espiral", meaning: "movimento cíclico, evolução, repetição transformadora" },
  7: { name: "O Portal", meaning: "transição, novas possibilidades, limiar de mudança" },
  8: { name: "O Coração", meaning: "emoção pura, verdade afetiva, conexão" },
  9: { name: "A Borboleta", meaning: "metamorfose, liberdade interior, leveza" },
 10: { name: "A Chave", meaning: "solução, revelação, sabedoria prática" },
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
      if (!card.classList.contains("clicked")) {
        const id = parseInt(card.dataset.id);
        chosenSequence.push(id);
        card.classList.add("clicked");

        if (chosenSequence.length === 12) {
          showResults();
        }
      }
    });
  });

  function showResults() {
    finalMessage.classList.remove("hidden");

    const journey = chosenSequence.map((id, index) => {
      const archetype = archetypes[id];
      return `<p><strong>${index + 1}.</strong> ${archetype.name}: <em>${archetype.meaning}</em></p>`;
    }).join("");

    sequenceResult.innerHTML = `<h3>Sua sequência:</h3>${journey}`;

    const lastCard = archetypes[chosenSequence[chosenSequence.length - 1]];
    cardAdvice.innerHTML = `
      <h3>🌟 Carta-Conselho: <span style="color:#93c5fd">${lastCard.name}</span></h3>
      <p>${lastCard.meaning.charAt(0).toUpperCase() + lastCard.meaning.slice(1)}. 
      Confie neste símbolo como um guia para o próximo passo da sua jornada.</p>
      <p style="margin-top:1em; font-style: italic;">🌒 Com carinho, Astrea.</p>
    `;
  }
});
