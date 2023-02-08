const popupElement = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_edit') 
const addPopup = document.querySelector('.popup_type_add');
const popupFullscreen = document.querySelector('.popup_type_photo'); 
const popupConteiner = popupElement.querySelector('.popup__container');
const popupForm = popupElement.querySelector('.popup__form');
const addPopupForm = addPopup.querySelector('.popup__form_type_add'); //завела модификатор для обращения к отдельным поапапм, формам или еще чему-то повторяющемуся 
const buttonClosePopup = popupProfile.querySelector('.popup__close-button'); //
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const submitAddPopup = popupElement.querySelector('.popup__save-button');
const buttonHeart = document.querySelectorAll('.element__heart');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAddButtonClouse = addPopup.querySelector('.popup__close-button'); //
const popupAddButton = addPopup.querySelector('.popup__add-button');
const buttonClose = popupFullscreen.querySelector('.popup__close-button'); 
const nameInput = popupElement.querySelector('.popup__input_data-name');
const descriptionInput = popupElement.querySelector('.popup__input_data-description');
const placeInput = addPopup.querySelector('.popup__input_data-title'); //классы для инпутов
const imageInput = addPopup.querySelector('.popup__input_data-photo'); //--//--
const title = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle'); 
const moreCard = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const fullscreenPicture = popupFullscreen.querySelector('.popup__image-full-screen');
const fullscreenName = popupFullscreen.querySelector('.popup__title-full-screen');
const popupList = Array.from(document.querySelectorAll('.popup'))

function openPopupAll(popup) {
  popup.classList.add('popup_open');
}

function closePopup(popupClose) {
  popupClose.classList.remove('popup_open');
}

function createCard(item) {
  const oneCard = cardTemplate.cloneNode(true);
  const cardText = oneCard.querySelector('.element__title'); //заголовка текстконтент
  cardText.textContent = item.name;
  const cardPath = oneCard.querySelector('.element__image');
  cardPath.alt = item.name;
  cardPath.src = item.link;
  

  const buttonHeart = oneCard.querySelector('.element__heart'); //сердце(лайк)
  buttonHeart.addEventListener('click', function () {
    buttonHeart.classList.toggle('element__heart_active');
  });

  const buttonDeleteHeart = oneCard.querySelector('.element__heart-delete'); //удаление сердца
  buttonDeleteHeart.addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  })

  cardPath.addEventListener('click', (event) => {
    fullscreenPicture.src = item.link;
    fullscreenPicture.alt = item.name;
    fullscreenName.textContent = item.name;
    openPopupAll(popupFullscreen);
  });
  return oneCard;
};

buttonClose.addEventListener('click', (event) => { //кнопка закрытия
  closePopup(popupFullscreen);
});

buttonOpenPopup.addEventListener('click', (event) => {
  openPopupAll(popupProfile);
  nameInput.value = title.textContent; // при открытии поапа поля формы заполнятся данными из профиля
  descriptionInput.value = subtitle.textContent;
});

buttonClosePopup.addEventListener('click', (event) => {
  closePopup(popupProfile)
});

function addTextSubtitle(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = descriptionInput.value;
  closePopup(popupProfile);
}
popupForm.addEventListener('submit', addTextSubtitle);

buttonAdd.addEventListener('click', (event) => {
  openPopupAll(addPopup);
});

popupAddButtonClouse.addEventListener('click', (event) => {
  closePopup(addPopup);
  addPopupForm.reset();
});

function renderCards() {
  initialCards.forEach(newItem => {
    const cardHtml = createCard(newItem);
    moreCard.prepend(cardHtml);
  })
}
renderCards();

addPopupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: imageInput.value
  }
  moreCard.prepend(createCard(newCard));
  closePopup(addPopup); 
  addPopupForm.reset();
});