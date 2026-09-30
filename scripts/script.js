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
const popupImage = document.querySelector("#popup__image");
const closeImageBtn = popupImage.querySelector("#close_image");
const overlayList = document.querySelectorAll(".popup");

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

// Abrir perfil
function openProfilePopup() {
  popupProfile.classList.add("popup_show");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  document.addEventListener("keydown", handleEsc);
  reactiveValidation();
}

editBtn.addEventListener("click", openProfilePopup);

//Cerrar perfil
function closeProfilePopup() {
  popupProfile.classList.remove("popup_show");
}

closeProfileBtn.addEventListener("click", closeProfilePopup);

// editar perfil

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  jobProfile.textContent = jobInput.value;
  nameProfile.textContent = nameInput.value;
  closeProfilePopup();
}

popupProfile.addEventListener("submit", handleProfileFormSubmit);

// Abrir add

function openAddPopup() {
  popuoAdd.classList.add("popup_show");
  document.addEventListener("keydown", handleEsc);
}

addBtn.addEventListener("click", openAddPopup);

// Cerrar add

function closeAddPopup() {
  titleInput.value = "";
  linkInput.value = "";
  popuoAdd.classList.remove("popup_show");
}

closeAddBtn.addEventListener("click", closeAddPopup);

function closeImagePopup() {
  popupImage.classList.remove("popup_show");
}

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
    popupImage.classList.add("popup_show");
    document.addEventListener("keydown", handleEsc);
  });

  closeImageBtn.addEventListener("click", closeImagePopup);

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
  closeAddPopup();
}

popuoAdd.addEventListener("submit", createNewCard);

function handleEsc(evt) {
  if (evt.key === "Escape") {
    console.log(evt.key);
    closeProfilePopup();
    closeAddPopup();
    closeImagePopup();
    document.removeEventListener("keydown", handleEsc);
  }
}
overlayList.forEach((overlay) => {
  overlay.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_show")) {
      closeProfilePopup();
      closeAddPopup();
      closeImagePopup();
    }
  });
});
