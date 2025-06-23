document.addEventListener("DOMContentLoaded", function() {
  const skillLink = document.getElementById("skill-link");
  const skillPopup = document.getElementById("skill-popup");

  skillLink.addEventListener("click", function(event) {
    event.preventDefault();

    // Calcula posição do link
    const rect = skillLink.getBoundingClientRect();

    skillPopup.style.position = "absolute";
    skillPopup.style.top = (rect.bottom + window.scrollY + 8) + "px";
    skillPopup.style.left = (rect.left + window.scrollX) + "px";
    skillPopup.style.maxWidth = "80vw";

    // Se o popup já estiver visível, esconde com fade-out
    if (skillPopup.classList.contains("show")) {
      skillPopup.classList.remove("show");
      setTimeout(() => {
        skillPopup.classList.add("hidden");
      }, 300); // Tempo igual ao transition do CSS
    } else {
      skillPopup.classList.remove("hidden");
      setTimeout(() => {
        skillPopup.classList.add("show");
      }, 10); // Pequeno delay para o browser reconhecer a transição
    }
  });

  // Fecha o popup ao clicar fora
  document.addEventListener("click", function(event) {
    if (!skillPopup.contains(event.target) && event.target !== skillLink) {
      if (skillPopup.classList.contains("show")) {
        skillPopup.classList.remove("show");
        setTimeout(() => {
          skillPopup.classList.add("hidden");
        }, 300);
      }
    }
  });
});