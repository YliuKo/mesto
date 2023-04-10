const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
export default initialCards;

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__text-error_visible",
};

const popupProfile = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupFullscreen = document.querySelector(".popup_type_photo");
const buttonOpenPopupEditProfile = document.querySelector(
  ".profile__edit-button"
);
const buttonAdd = document.querySelector(".profile__add-button");
const nameInput = popupProfile.querySelector(".popup__input_data-name");
const descriptionInput = popupProfile.querySelector(
  ".popup__input_data-description"
);
const title = document.querySelector(".profile__name");
const subtitle = document.querySelector(".profile__subtitle");
const cardsElement = document.querySelector(".elements");
const fullscreenPicture = popupFullscreen.querySelector(
  ".popup__image-full-screen"
);
const fullscreenName = popupFullscreen.querySelector(
  ".popup__title-full-screen"
);

export {
  validationConfig,
  popupProfile,
  popupAdd,
  buttonOpenPopupEditProfile,
  buttonAdd,
  nameInput,
  descriptionInput,
  title,
  popupFullscreen,
  subtitle,
  cardsElement,
  fullscreenName,
  fullscreenPicture,
};
