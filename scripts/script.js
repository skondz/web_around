const editBtn = document.querySelector(".profile__btn_edit");
const popup = document.querySelector(".popup");
const closeBtn = popup.querySelector(".popup__btn_close");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popup.querySelector(".popup__input-name");
const jobProfile = document.querySelector(".profile__job");
const jobInput = popup.querySelector(".popup__input-job");

// Abrir y cerrar Popup

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  jobProfile.textContent = jobInput.value;
  nameProfile.textContent = nameInput.value;
  closePopup();
}

editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
popup.addEventListener("submit", handleProfileFormSubmit);
