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
const cardTemplate = document.querySelector(".card__template").content;
const cardGrid = document.querySelector(".cards");
const popupImage = document.querySelector(".popup_image");
const closeImageBtn = popupImage.querySelector("#close_image");

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

// Abrir y cerrar profile

function toggleProfilePopup() {
  popupProfile.classList.toggle("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
editBtn.addEventListener("click", toggleProfilePopup);
closeProfileBtn.addEventListener("click", toggleProfilePopup);

// Guardar perfil

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  jobProfile.textContent = jobInput.value;
  nameProfile.textContent = nameInput.value;
  toggleProfilePopup();
}
popupProfile.addEventListener("submit", handleProfileFormSubmit);

// Abrir y cerrar add

function toggleAddPopup() {
  popuoAdd.classList.toggle("popup_opened");
  titleInput.value = "";
  linkInput.value = "";
}
addBtn.addEventListener("click", toggleAddPopup);
closeAddBtn.addEventListener("click", toggleAddPopup);

//Cards
function createCard(name, link) {
  const card = cardTemplate.querySelector(".card__container").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardName = card.querySelector(".card__text");
  const deleteBtn = card.querySelector(".card__btn_delete");
  const likeBtn = card.querySelector(".card__btn_like");
  const popupFullImage = popupImage.querySelector(".popup__link");
  const popupText = popupImage.querySelector(".popup__text");

  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });

  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("card__btn_like-active");
  });

  cardImage.addEventListener("click", function () {
    popupFullImage.src = link;
    popupFullImage.alt = name;
    popupText.textContent = name;
    popupImage.classList.add("popup_opened");
  });

  closeImageBtn.addEventListener("click", function () {
    popupImage.classList.remove("popup_opened");
  });

  console.log(card);
  return card;
}

initialCards.forEach(function (card) {
  const newCard = createCard(card.name, card.link);
  cardGrid.append(newCard);
});

function createNewCard(evt) {
  const newCard = createCard(titleInput.value, linkInput.value);
  evt.preventDefault();
  cardGrid.append(newCard);
  toggleAddPopup();
}

popuoAdd.addEventListener("submit", createNewCard);
