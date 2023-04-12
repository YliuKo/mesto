import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import initialCards from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithDelete } from "../components/PopupWithDelete.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "../pages/index.css";

import {
  validationConfig,
  popupProfile,
  popupAdd,
  buttonOpenPopupEditProfile,
  buttonAdd,
  buttonAvatar,
  popupAvatar,
  cardConfig,
  title,
  subtitle,
  popupDelete,
  image,
  cardsElement,
  popupFullscreen,
} from "../utils/constants.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    Authorization: "a4b5dd91-5d4d-460d-8550-bc8703b39a26",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    section.render(cards.reverse());
  })
  .catch((error) => {
    console.log(error);
  });

buttonAdd.addEventListener("click", (event) => {
  cardFormValidator.resetValidation();
  addPopup.open();
});

buttonOpenPopupEditProfile.addEventListener("click", (event) => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  profilePopup.open();
});

buttonAvatar.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  popupWithAvatar.open();
});

function getCardData(name, link) {
  fullscreenPopup.open(link, name);
}

function generateCard(dataCard) {
  const newCard = new Card(
    dataCard,
    cardConfig,
    ".card-template",
    getCardData,
    handleDelete,
    getId,
    (id) => {
      api
        .likeCard(id)
        .then((res) => {
          newCard.getLikesCount(res);
          newCard.changeLike(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    (id) => {
      api
        .dislikeCard(id)
        .then((res) => {
          newCard.getLikesCount(res);
          newCard.changeLike(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  );

  return newCard.generateCard();
}

function handleDelete(data, deleteCard) {
  popupWithDelete.open();
  popupWithDelete.setData(data, deleteCard);
}

function getId() {
  return userInfo.getUserId();
}
const profileFormValidator = new FormValidator(popupProfile, validationConfig);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(popupAdd, validationConfig);
cardFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(popupAvatar, validationConfig);
avatarFormValidator.enableValidation();

const section = new Section(
  {
    renderer: (card) => {
      const elem = generateCard(card);
      section.addItem(elem);
    },
  },
  cardsElement
);

const userInfo = new UserInfo(title, subtitle, image);
const fullscreenPopup = new PopupWithImage(popupFullscreen);

const profilePopup = new PopupWithForm(popupProfile, (data) => {
  profilePopup.showLoading(true);
  api
    .setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      profilePopup.showLoading(false);
    });
});

const addPopup = new PopupWithForm(popupAdd, (data) => {
  addPopup.showLoading(true);
  api
    .addNewCard(data)
    .then((res) => {
      const element = generateCard(res);
      section.addItem(element);
      addPopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      addPopup.showLoading(false);
    });
});

const popupWithDelete = new PopupWithDelete(popupDelete, () => {
  const { data, deleteCard } = popupWithDelete.getData();

  api
    .deleteCard(data._id)
    .then(() => {
      deleteCard();
      popupWithDelete.close();
    })
    .catch((error) => {
      console.log(error);
    });
});

const popupWithAvatar = new PopupWithForm(popupAvatar, (data) => {
  popupWithAvatar.showLoading(true);
  api
    .setAvatar(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupWithAvatar.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupWithAvatar.showLoading(false);
    });
});
// enableValidation(validationConfig);

profilePopup.setEventListeners();
addPopup.setEventListeners();
fullscreenPopup.setEventListeners();
popupWithDelete.setEventListeners();
popupWithAvatar.setEventListeners();
