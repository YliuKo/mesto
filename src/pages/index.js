import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import initialCards from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "../pages/index.css";

import {
  validationConfig,
  popupProfile,
  popupAdd,
  buttonOpenPopupEditProfile,
  buttonAdd,
  nameInput,
  descriptionInput,
  title,
  subtitle,
  cardsElement,
  fullscreenName,
  popupFullscreen,
  fullscreenPicture,
} from "../utils/constants.js";

function createCard(item) {
  //создание карточки
  console.trace();
  console.log(item);
  const newCard = new Card(item, ".card-template", getCardData).createCard();
  return newCard;
}

const rendererObj = {
  items: initialCards,
  renderer: createCard,
};

const section = new Section(rendererObj, cardsElement);
section.render();

const userInfo = new UserInfo(title, subtitle);
const fullscreenPopup = new PopupWithImage(popupFullscreen);
const addPopup = new PopupWithForm(popupAdd, (evt, dict) => {
  addCard(evt, dict);
});

const profilePopup = new PopupWithForm(popupProfile, (evt, dict) => {
  addTextSubtitle(evt, dict);
});

function getCardData(name, link) {
  fullscreenPopup.open(link, name);
}

buttonOpenPopupEditProfile.addEventListener("click", (event) => {
  profilePopup.open();
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
});

function addTextSubtitle(evt, dict) {
  evt.preventDefault();
  console.log(dict);
  userInfo.setUserInfo(dict["input-name"], dict["input-description"]);
  profilePopup.close();
}

function addCard(evt, dict) {
  evt.preventDefault();
  const newCard = {
    name: dict["input-title"],
    link: dict["input-photo"],
  };
  section.addItem(newCard);
}

buttonAdd.addEventListener("click", (event) => {
  cardFormValidator.resetValidation();
  addPopup.open();
});

// enableValidation(validationConfig);
const profileFormValidator = new FormValidator(popupProfile, validationConfig);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(popupAdd, validationConfig);
cardFormValidator.enableValidation();

profilePopup.setEventListeners();
addPopup.setEventListeners();
fullscreenPopup.setEventListeners();
