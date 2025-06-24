document.addEventListener("DOMContentLoaded", function () {
  // === POPUP SKILLS ===
  const skillLink = document.getElementById("skill-link");
  const skillPopup = document.getElementById("skill-popup");

  skillLink.addEventListener("click", function (event) {
    event.preventDefault();

    const rect = skillLink.getBoundingClientRect();

    skillPopup.style.position = "absolute";
    skillPopup.style.top = rect.bottom + window.scrollY + 8 + "px";
    const popupWidth = 200; 
    let left = rect.left + window.scrollX;

    if (left + popupWidth > window.innerWidth) {
      left = window.innerWidth - popupWidth - 5; 
    }

    contatoPopup.style.left = left + "px";
    contatoPopup.style.maxWidth = popupWidth + "px";
    skillPopup.style.maxWidth = "80vw";

    if (skillPopup.classList.contains("show")) {
      skillPopup.classList.remove("show");
      setTimeout(() => {
        skillPopup.classList.add("hidden");
      }, 300);
    } else {
      skillPopup.classList.remove("hidden");
      setTimeout(() => {
        skillPopup.classList.add("show");
      }, 10);
    }
  });

  document.addEventListener("click", function (event) {
    if (!skillPopup.contains(event.target) && event.target !== skillLink) {
      if (skillPopup.classList.contains("show")) {
        skillPopup.classList.remove("show");
        setTimeout(() => {
          skillPopup.classList.add("hidden");
        }, 300);
      }
    }
  });

  // === POPUP CONTATOS ===
  const contatoLink = document.getElementById("contato-link");
  const contatoPopup = document.getElementById("contato-popup");

  contatoLink.addEventListener("click", function (event) {
    event.preventDefault();

    const rect = contatoLink.getBoundingClientRect();

    contatoPopup.style.position = "absolute";
    contatoPopup.style.top = rect.bottom + window.scrollY + 8 + "px";
    const popupWidth = 200; // largura máxima estimada
    let left = rect.left + window.scrollX;

    if (left + popupWidth > window.innerWidth) {
      left = window.innerWidth - popupWidth - 15; // margem de 15px
    }

    contatoPopup.style.left = left + "px";
    contatoPopup.style.maxWidth = popupWidth + "px";
    contatoPopup.style.maxWidth = "80vw";

    if (contatoPopup.classList.contains("show")) {
      contatoPopup.classList.remove("show");
      setTimeout(() => {
        contatoPopup.classList.add("hidden");
      }, 300);
    } else {
      contatoPopup.classList.remove("hidden");
      setTimeout(() => {
        contatoPopup.classList.add("show");
      }, 10);
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !contatoPopup.contains(event.target) &&
      event.target !== contatoLink
    ) {
      if (contatoPopup.classList.contains("show")) {
        contatoPopup.classList.remove("show");
        setTimeout(() => {
          contatoPopup.classList.add("hidden");
        }, 300);
      }
    }
  });
});
