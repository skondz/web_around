const overlayList = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile");
const popuoAdd = document.querySelector(".popup_add");
const inputList = document.querySelectorAll(".popup__input");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popupProfile.querySelector(".popup__input-name");
const jobProfile = document.querySelector(".profile__job");
const jobInput = popupProfile.querySelector(".popup__input-job");

// Abrir Perfil
function openProfilePopup() {
  popupProfile.classList.add("popup_show");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  document.addEventListener("keydown", handleEsc);
}

function updateProfile() {
  jobProfile.textContent = jobInput.value;
  nameProfile.textContent = nameInput.value;
  closePopup();
}

// Abrir Add
function openAddPopup() {
  popuoAdd.classList.add("popup_show");
  document.addEventListener("keydown", handleEsc);
}

// Cerrar Popups
function closePopup() {
  document.querySelector(".popup_show").classList.remove("popup_show");
  inputList.forEach((inputElement) => {
    inputElement.value = "";
  });
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

export { handleEsc, closePopup, openProfilePopup, openAddPopup, updateProfile };
