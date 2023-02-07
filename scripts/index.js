const popupElement = document.querySelector('.popup');
const popupProfiel = document.querySelector('.popup_type_edit') 
const popupAdd = document.querySelector('.popup_type_add');
const fullscreenPopup = document.querySelector('.popup_type_photo'); 
const popupConteiner = popupElement.querySelector('.popup__container');
const popupForm = popupElement.querySelector('.popup__form');
const popupFormAdd = popupAdd.querySelector('.popup__form_type_add'); //завела модификатор для обращения к отдельным поапапм, формам или еще чему-то повторяющемуся 
const buttonClosePopup = popupProfiel.querySelector('.popup__close-button'); //
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const submitAddPopup = popupElement.querySelector('.popup__save-button');
const buttonHeart = document.querySelectorAll('.element__heart');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAddClouseButton = popupAdd.querySelector('.popup__close-button'); //
const popupAddButton = popupAdd.querySelector('.popup__add-button');
const clouseButtton = fullscreenPopup.querySelector('.popup__close-button'); 
const nameInput = popupElement.querySelector('.popup__input_data-name');
const descriptionInput = popupElement.querySelector('.popup__input_data-description');
const placeInput = popupAdd.querySelector('.popup__input_data-title'); //классы для инпутов
const imageInput = popupAdd.querySelector('.popup__input_data-photo'); //--//--
const title = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle'); 
const moreCard = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const fullscreenPicture = fullscreenPopup.querySelector('.popup__image-full-screen');
const fullscreenName = fullscreenPopup.querySelector('.popup__title-full-screen');
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupList = Array.from(document.querySelectorAll('.popup'))

function openPopupAll(popup) {
  popup.classList.add('popup_open');
}

function closePopup(popupClouse) {
  popupClouse.classList.remove('popup_open');
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

  const HeartDeleteButton = oneCard.querySelector('.element__heart-delete'); //удаление сердца
  HeartDeleteButton.addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  })

  cardPath.addEventListener('click', (event) => {
    fullscreenPicture.src = item.link;
    fullscreenPicture.alt = item.name;
    fullscreenName.textContent = item.name;
    openPopupAll(fullscreenPopup);
  });
  return oneCard;
};

clouseButtton.addEventListener('click', (event) => { //кнопка закрытия
  closePopup(fullscreenPopup);
});

buttonOpenPopup.addEventListener('click', (event) => {
  openPopupAll(popupProfiel);
  nameInput.value = title.textContent; // при открытии поапа поля формы заполнятся данными из профиля
  descriptionInput.value = subtitle.textContent;
});

buttonClosePopup.addEventListener('click', (event) => {
  closePopup(popupProfiel)
});

function addTextSubtitle(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = descriptionInput.value;
  closePopup(popupProfiel);
}
popupForm.addEventListener('submit', addTextSubtitle);

buttonAdd.addEventListener('click', (event) => {
  openPopupAll(popupAdd);
});

popupAddClouseButton.addEventListener('click', (event) => {
  closePopup(popupAdd);
});

function renderCards() {
  initialCards.forEach(newItem => {
    const cardHtml = createCard(newItem);
    moreCard.prepend(cardHtml);
  })
}
renderCards();

popupFormAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: imageInput.value
  }
  moreCard.prepend(createCard(newCard));
  closePopup(popupAdd);
  popupFormAdd.reset();
});