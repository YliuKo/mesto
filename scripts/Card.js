export default class Card {
    constructor(card, selector, handleOpenPopup) {
        this._name = card.name;
        this._link = card.link;
        this.selector = selector;
        this.likeCard = this.likeCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this._handleOpenPopup = handleOpenPopup;
    }

    getCard() {
        return document.querySelector(this.selector).content.querySelector('.element').cloneNode(true);
    }

    createCard() { //создание карточки
        this.oneCard = this.getCard();
        this.cardPath = this.oneCard.querySelector(".element__image")
        this.cardText = this.oneCard.querySelector(".element__title")
        this.buttonDeleteCard = this.oneCard.querySelector(".element__heart-delete")
        this.buttonHeart = this.oneCard.querySelector(".element__heart")

        this.cardPath.alt = this._name;
        this.cardPath.src = this._link;
        this.cardText.textContent = this._name;

        this.eventListeners();

        return this.oneCard;
    };

    likeCard() {
        this.buttonHeart.classList.toggle('element__heart_active');
    }

    deleteCard() {
        this.oneCard.remove();
        this.oneCard = null;
    }

    getFullScreenImageTitle() {
        return this.fullScreenImageTitle = document.querySelector(".popup__title-full-screen")
    }

    getPopupTypeImage() {
        return this.popupTypeImage = document.querySelector(".popup_type_photo")
    }

    getFullScreenImage() {
        return this.fullScreenImage = document.querySelector(".popup__image-full-screen")

    }

    eventListeners() {
        this.buttonHeart.addEventListener('click', this.likeCard);
        this.buttonDeleteCard.addEventListener('click', this.deleteCard);
        this.cardPath.addEventListener('click', () => {
            this.getPopupTypeImage();
            this.getFullScreenImage();
            this.getFullScreenImageTitle();
            this._handleOpenPopup(this._name, this._link);
        })
    }
}