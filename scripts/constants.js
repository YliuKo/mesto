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

const errorMessages = {
  title: {
    tooShort: "Минимальная длина поля - 2 символа",
    tooLong: "Максимальная длина поля - 30 символов",
    valueMissing: "Пожалуйста, заполните это поле"
  },
  photo: {
    typeMismatch: "Пожалуйста, введите ссылку",
    valueMissing: "Пожалуйста, заполните это поле"
  },
  username: {
    tooShort: "Минимальная длина поля - 2 символа",
    tooLong: "Максимальная длина поля - 40 символов",
    valueMissing: "Пожалуйста, заполните это поле"
  },
  activity: {
    tooShort: "Минимальная длина поля - 2 символа",
    tooLong: "Максимальная длина поля - 200 символов",
    valueMissing: "Пожалуйста, заполните это поле"
  }
};