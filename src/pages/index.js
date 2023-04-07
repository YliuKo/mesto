import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import initialCards from '../utils/constants.js';
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import '../pages/index.css'




function createCard(item) { //создание карточки
    console.trace()
    console.log(item)
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
    fullscreenPopup.open(fullscreenPicture, link, fullscreenName, name);
}

buttonOpenPopupEditProfile.addEventListener('click', (event) => {
    profilePopup.open();
    nameInput.value = userInfo.getUserInfo(); // при открытии поапа поля формы заполнятся данными из профиля
    descriptionInput.value = userInfo.getUserInfo();
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
    section.addItem(newCard);
}


buttonAdd.addEventListener('click', (event) => {
    addPopup.open();
});


// enableValidation(validationConfig);
const profileFormValidator = new FormValidator(popupProfile, validationConfig)
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(popupAdd, validationConfig)
cardFormValidator.enableValidation();
