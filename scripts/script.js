import { Card } from "./Card.js";
import { closePopup, openProfilePopup, openAddPopup } from "./utils.js";

const editBtn = document.querySelector(".profile__btn_edit");
const popupProfile = document.querySelector(".popup_profile");
const closeProfileBtn = popupProfile.querySelector("#close_profile");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popupProfile.querySelector(".popup__input-name");
const jobProfile = document.querySelector(".profile__job");
const jobInput = popupProfile.querySelector(".popup__input-job");
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

// Initialize
initialCards.forEach(function (card) {
  const newCard = new Card(card.name, card.link);
  cardGrid.append(newCard.createCard());
});

// Profile Events

editBtn.addEventListener("click", () => {
  openProfilePopup();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeProfileBtn.addEventListener("click", closePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  jobProfile.textContent = jobInput.value;
  nameProfile.textContent = nameInput.value;
  closePopup();
}

popupProfile.addEventListener("submit", handleProfileFormSubmit);

// Add Events

addBtn.addEventListener("click", () => {
  openAddPopup();
  titleInput.value = "";
  linkInput.value = "";
});

closeAddBtn.addEventListener("click", closePopup);

function createNewCard(evt) {
  const newCard = new Card(titleInput.value, linkInput.value);
  evt.preventDefault();
  cardGrid.append(newCard.createCard());
  closePopup();
}

popuoAdd.addEventListener("submit", createNewCard);
