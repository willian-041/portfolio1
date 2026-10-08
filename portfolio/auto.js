document.addEventListener("DOMContentLoaded", function () {
  const skillLink = document.getElementById("skill-link");
  const skillPopup = document.getElementById("skill-popup");
  const contatoLink = document.getElementById("contato-link");
  const contatoPopup = document.getElementById("contato-popup");

  // Toggle Popup Skills
  skillLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    contatoPopup.classList.add("hidden");
    skillPopup.classList.toggle("hidden");
  });

  // Toggle Popup Contato
  contatoLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    skillPopup.classList.add("hidden");
    contatoPopup.classList.toggle("hidden");
  });

  // Esconde ao clicar em qualquer lugar fora dos menus
  document.addEventListener("click", function (event) {
    if (!skillPopup.contains(event.target) && event.target !== skillLink) {
      skillPopup.classList.add("hidden");
    }
    if (!contatoPopup.contains(event.target) && event.target !== contatoLink) {
      contatoPopup.classList.add("hidden");
    }
  });
});