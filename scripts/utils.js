const overlayList = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile");
const popuoAdd = document.querySelector(".popup_add");

// Abrir Perfil
function openProfilePopup() {
  popupProfile.classList.add("popup_show");
  document.addEventListener("keydown", handleEsc);
}

// Abrir Add
function openAddPopup() {
  popuoAdd.classList.add("popup_show");
  document.addEventListener("keydown", handleEsc);
}

// Cerrar Popups
function closePopup() {
  document.querySelector(".popup_show").classList.remove("popup_show");
}

// Cerrar con Esc
function handleEsc(evt) {
  if (evt.key === "Escape") {
    document.querySelector(".popup_show").classList.remove("popup_show");
    document.removeEventListener("keydown", handleEsc);
  }
}

// Cerrar con Overlay
overlayList.forEach((overlay) => {
  overlay.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_show")) {
      evt.target.classList.remove("popup_show");
    }
  });
});

export { handleEsc, closePopup, openProfilePopup, openAddPopup };
