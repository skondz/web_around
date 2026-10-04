import { handleEsc, closePopup } from "./utils.js";

export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this._getTemplate();
  }
  _getTemplate() {
    return document
      .querySelector(".card__template")
      .content.querySelector(".card__container")
      .cloneNode(true);
  }
  _setProperties() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardName = this._card.querySelector(".card__text");
    this._deleteBtn = this._card.querySelector(".card__btn_delete");
    this._likeBtn = this._card.querySelector(".card__btn_like");
    this._popupFullImage = document.querySelector(".popup__link");
    this._popupText = document.querySelector(".popup__text");
    this._closeImageBtn = document.querySelector("#close_image");
    this._popupImage = document.querySelector("#popup__image");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
  }
  _deleteCard() {
    this._card.remove();
  }
  _toggleLike() {
    this._likeBtn.classList.toggle("card__btn_like-active");
  }
  _setPopup() {
    this._popupFullImage.src = this._link;
    this._popupFullImage.alt = this._name;
    this._popupText.textContent = this._name;
    this._popupImage.classList.add("popup_show");
    document.addEventListener("keydown", handleEsc);
    this._closeImageBtn.addEventListener("click", closePopup);
  }
  _setListeners() {
    this._likeBtn.addEventListener("click", () => this._toggleLike());
    this._deleteBtn.addEventListener("click", () => this._deleteCard());
    this._cardImage.addEventListener("click", () => this._setPopup());
  }
  createCard() {
    this._setProperties();
    this._setListeners();
    return this._card;
  }
}
