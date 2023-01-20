const popupElement = document.querySelector('.popup');  
const popupConteiner = popupElement.querySelector('.popup__container');
const popupForm = popupElement.querySelector('.popup__form');
const buttonClosePopup = popupElement.querySelector('.popup__close-button'); 
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonSavePopup = popupElement.querySelector('.popup__save-button');
let nameInput = popupElement.querySelector('.popup__input_data_name');
let description = popupElement.querySelector('.popup__input_data_description');
let title = document.querySelector('.profile__taitle');
let subtitle = document.querySelector('.profile__subtaitle');

const openPopup = function() {
    popupElement.classList.add('popup_open');
    nameInput.value = title.textContent;
    description.value = subtitle.textContent;
};
buttonOpenPopup.addEventListener('click', openPopup);

const closePopup = function () {
    popupElement.classList.remove('popup_open');
}
buttonClosePopup.addEventListener('click', closePopup);

function addTextSubtitle(evt){
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = description.value;
closePopup();
}

popupForm.addEventListener('submit', addTextSubtitle);