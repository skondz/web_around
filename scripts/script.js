import { Card } from "./Card.js";
import {
  closePopup,
  openProfilePopup,
  openAddPopup,
  updateProfile,
} from "./utils.js";
import { FormValidator } from "./FormValidator.js";

const editBtn = document.querySelector(".profile__btn_edit");
const popupProfile = document.querySelector(".popup_profile");
const closeProfileBtn = popupProfile.querySelector("#close_profile");
const addBtn = document.querySelector(".profile__btn_add");
const popuoAdd = document.querySelector(".popup_add");
const closeAddBtn = popuoAdd.querySelector("#close_add");
const titleInput = popuoAdd.querySelector(".popup__input-title");
const linkInput = popuoAdd.querySelector(".popup__input-link");
const cardGrid = document.querySelector(".cards");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Initialize
initialCards.forEach(function (card) {
  const newCard = new Card(card.name, card.link);
  cardGrid.append(newCard.createCard());
});

// Profile
editBtn.addEventListener("click", openProfilePopup);

closeProfileBtn.addEventListener("click", () => {
  closePopup();
  validateProfile.eneableValidation();
});

popupProfile.addEventListener("submit", () => {
  updateProfile();
  validateProfile.eneableValidation();
});

// Add
addBtn.addEventListener("click", openAddPopup);

closeAddBtn.addEventListener("click", () => {
  closePopup();
  validateAdd.eneableValidation();
});

function createNewCard() {
  const newCard = new Card(titleInput.value, linkInput.value);
  cardGrid.append(newCard.createCard());
  closePopup();
  validateAdd.eneableValidation();
}

popuoAdd.addEventListener("submit", createNewCard);

//Validation
const validateProfile = new FormValidator(validationSettings, popupProfile);
const validateAdd = new FormValidator(validationSettings, popuoAdd);

validateProfile.eneableValidation();
validateAdd.eneableValidation();
