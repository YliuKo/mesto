const popupElement = document.querySelector('.popup');  
const popupConteiner = popupElement.querySelector('.popup__container');
const popupForm = popupElement.querySelector('.popup__form');
const buttonClosePopup = popupElement.querySelector('.popup__close-button'); 
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonSavePopup = popupElement.querySelector('.popup__save-button');
let nameInput = popupElement.querySelector('.popup__input_data_name');
let descriptionInput = popupElement.querySelector('.popup__input_data_description');
let profileTitle = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');

const openPopup = function() {
    popupElement.classList.add('popup__open');
    nameInput.value = profileTitle.textContent;
    descriptionInput.value = profileSubtitle.textContent;
};
buttonOpenPopup.addEventListener('click', openPopup);

const closePopup = function () {
    popupElement.classList.remove('popup__open');
}
buttonClosePopup.addEventListener('click', closePopup);

function addTextSubtitle(evt){
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = descriptionInput.value;
closePopup();
}

popupForm.addEventListener('submit', addTextSubtitle);