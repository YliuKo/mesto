import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from './constants.js';
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import '../pages/index.css'

const validationConfig = { 
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__text-error_visible'
};

const popupProfile = document.querySelector('.popup_type_edit')
const popupAdd = document.querySelector('.popup_type_add');
const popupFullscreen = document.querySelector('.popup_type_photo');
const popupConteiner = popupProfile.querySelector('.popup__container');
const formEditProfile = popupProfile.querySelector('.popup__form');
const formAddCard = popupAdd.querySelector('.popup__form_type_add'); //завела модификатор для обращения к отдельным поапапм, формам или еще чему-то повторяющемуся 
const buttonClosePopupEditProfile = popupProfile.querySelector('.popup__close-button'); //
const buttonOpenPopupEditProfile = document.querySelector('.profile__edit-button');
const submitAddPopup = popupProfile.querySelector('.popup__save-button');
const buttonHeart = document.querySelectorAll('.element__heart');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAddCardPopup = popupAdd.querySelector('.popup__close-button'); //
const popupAddButton = popupAdd.querySelector('.popup__add-button');
const buttonClosePopupImage = popupFullscreen.querySelector('.popup__close-button');
const nameInput = popupProfile.querySelector('.popup__input_data-name');
const descriptionInput = popupProfile.querySelector('.popup__input_data-description');
const placeInput = popupAdd.querySelector('.popup__input_data-title'); //классы для инпутов
const imageInput = popupAdd.querySelector('.popup__input_data-photo'); //--//--
const title = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const cardsElement = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const fullscreenPicture = popupFullscreen.querySelector('.popup__image-full-screen');
const fullscreenName = popupFullscreen.querySelector('.popup__title-full-screen');
const popupList = Array.from(document.querySelectorAll('.popup')) //поиск попап


function createCard(item) { //создание карточки
    const newCard = new Card(item, '.card-template', getCardData).createCard()
    return newCard;
}

const rendererObj = {
    items: initialCards,
    renderer: createCard,
}

const section = new Section(rendererObj, cardsElement);
section.render();

const userInfo = new UserInfo(title, subtitle);
const fullscreenPopup = new PopupWithImage(popupFullscreen);
const addPopup = new PopupWithForm(popupAdd, (evt, dict) => {
    addCard(evt, dict);
})

const profilePopup = new PopupWithForm(popupProfile, (evt, dict) => {
    addTextSubtitle(evt, dict);
})


function getCardData(name, link) {
    fullscreenName.textContent = name;
    fullscreenPopup.open(fullscreenPicture, link, fullscreenName, name);
}

buttonOpenPopupEditProfile.addEventListener('click', (event) => {
    profilePopup.open();
    nameInput.value = title.textContent; // при открытии поапа поля формы заполнятся данными из профиля
    descriptionInput.value = subtitle.textContent;
    popupValidateCard.resetValidation();

});

function addTextSubtitle(evt, dict) {
    evt.preventDefault();
    userInfo.setUserInfo(dict.get('input-name'), dict.get('input-description'));
    profilePopup.close();
}

function addCard(evt, dict) {
    evt.preventDefault();
    const newCard = {
        name: dict.get('input-title'),
        link: dict.get('input-photo'),
    }
    cardsElement.prepend(createCard(newCard));
    evt.target.reset();
    addPopup.close();   
}


buttonAdd.addEventListener('click', (event) => {
    popupValidateCard.resetValidation();
    addPopup.open();
});


// enableValidation(validationConfig);
const popupValidateCard = new FormValidator(popupProfile, validationConfig)
popupValidateCard.enableValidation();
const addValidateCard = new FormValidator(popupAdd, validationConfig)
addValidateCard.enableValidation();