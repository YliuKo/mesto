import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from './constants.js';

const validationConfig = { 
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__text-error_visible'
};

const popupProfile = document.querySelector('.popup_type_edit')
const addPopup = document.querySelector('.popup_type_add');
const popupFullscreen = document.querySelector('.popup_type_photo');
const popupConteiner = popupProfile.querySelector('.popup__container');
const formEditProfile = popupProfile.querySelector('.popup__form');
const formAddCard = addPopup.querySelector('.popup__form_type_add'); //завела модификатор для обращения к отдельным поапапм, формам или еще чему-то повторяющемуся 
const buttonClosePopupEditProfile = popupProfile.querySelector('.popup__close-button'); //
const buttonOpenPopupEditProfile = document.querySelector('.profile__edit-button');
const submitAddPopup = popupProfile.querySelector('.popup__save-button');
const buttonHeart = document.querySelectorAll('.element__heart');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAddCardPopup = addPopup.querySelector('.popup__close-button'); //
const popupAddButton = addPopup.querySelector('.popup__add-button');
const buttonClosePopupImage = popupFullscreen.querySelector('.popup__close-button');
const nameInput = popupProfile.querySelector('.popup__input_data-name');
const descriptionInput = popupProfile.querySelector('.popup__input_data-description');
const placeInput = addPopup.querySelector('.popup__input_data-title'); //классы для инпутов
const imageInput = addPopup.querySelector('.popup__input_data-photo'); //--//--
const title = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const cardsElement = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const fullscreenPicture = popupFullscreen.querySelector('.popup__image-full-screen');
const fullscreenName = popupFullscreen.querySelector('.popup__title-full-screen');
const popupList = Array.from(document.querySelectorAll('.popup')) //поиск попап

function closePopup(popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupEsc);
}

popupList.forEach((popup) => { //закрытие по оверлей
    popup.addEventListener('mouseup', (evt) => {
        const targetClassList = evt.target.classList;
        if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
            closePopup(popup);
        }
    })
})

function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', closePopupEsc);
}

function getCardData(name, link) {
    fullscreenPicture.alt = name
    fullscreenPicture.src = link;
    fullscreenName.textContent = name;
    openPopup(popupFullscreen)
}

function closePopupEsc(event) { // закрыте по Esc
    if (event.key === 'Escape') {
        const openPopup = document.querySelector('.popup_open');
        closePopup(openPopup);
    }
}

function createCard(item) { //создание карточки
    const newCard = new Card(item, '.card-template', getCardData).createCard()
    return newCard;
}

buttonOpenPopupEditProfile.addEventListener('click', (event) => {
    openPopup(popupProfile);
    nameInput.value = title.textContent; // при открытии поапа поля формы заполнятся данными из профиля
    descriptionInput.value = subtitle.textContent;
    popupValidateCard.resetValidation();

});

function addTextSubtitle(evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = descriptionInput.value;
    closePopup(popupProfile);
}

formEditProfile.addEventListener('submit', addTextSubtitle);

buttonAdd.addEventListener('click', (event) => {
    popupValidateCard.resetValidation();
    openPopup(addPopup);
});
function renderCards() {
    initialCards.forEach(newItem => {
        const cardHtml = createCard(newItem);
        cardsElement.prepend(cardHtml);
    })
}
renderCards();

formAddCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: imageInput.value
    }
    cardsElement.prepend(createCard(newCard));
    evt.target.reset();
    closePopup(addPopup);
});

// enableValidation(validationConfig);
const popupValidateCard = new FormValidator(popupProfile, validationConfig)
popupValidateCard.enableValidation();
const addValidateCard = new FormValidator(addPopup, validationConfig)
addValidateCard.enableValidation();