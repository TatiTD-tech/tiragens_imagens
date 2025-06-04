const archetypes = {
  1: { name: "A Criança", meaning: "inocência, espontaneidade, nascimento interior" },
  2: { name: "A Serpente", meaning: "transformação, tentação, verdade crua" },
  3: { name: "A Chave", meaning: "solução, revelação, sabedoria prática" }
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
        card.style.opacity = 0;
        card.style.pointerEvents = "none";

        if (chosenSequence.length === 3) {
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

    const lastCard = archetypes[chosenSequence[2]];

    cardAdvice.innerHTML = `
      <h3>🌟 Carta-Conselho: <span style="color:#93c5fd">${lastCard.name}</span></h3>
      <p>${lastCard.meaning.charAt(0).toUpperCase() + lastCard.meaning.slice(1)}.
      Confie neste símbolo como um guia para o próximo passo da sua jornada.</p>
      <p style="margin-top:1em; font-style: italic;">🌒 Com carinho, Lua Cósmica Tarot.</p>
    `;
  }
});

// Compartilhar leitura
const shareBtn = document.getElementById("share-btn");
const shareMsg = document.getElementById("share-msg");

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const shareText = `🌒 Fiz minha leitura no Jogo das Imagens Internas da Lua Cósmica. Foi uma experiência mágica e reveladora. Faça a sua: https://tatitd-tech.github.io/tiragens_imagens/`;

    try {
      await navigator.clipboard.writeText(shareText);
      shareMsg.textContent = "🔗 Texto copiado! Agora é só colar onde quiser.";
    } catch (err) {
      shareMsg.textContent = "❌ Não foi possível copiar. Copie manualmente: " + shareText;
    }
  });
}
