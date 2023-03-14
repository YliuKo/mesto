export default class Card {
    constructor(card, selector, openPopup) {
        this._name = card.name;
        this._link = card.link;
        this.selector = selector;
        this._openPopup = openPopup;
        this.likeCard = this.likeCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    getCard() {
        return document.querySelector(this.selector).content.cloneNode(true);
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
        this.buttonDeleteCard.closest('.element').remove();
    }

    eventListeners() {
        this.buttonHeart.addEventListener('click', this.likeCard);
        this.buttonDeleteCard.addEventListener('click', this.deleteCard);
        this.cardPath.addEventListener('click', () => {
            this.popupTypeImage = document.querySelector(".popup_type_photo")
            this.fullScreenImage = document.querySelector(".popup__image-full-screen")
            this.fullScreenImageTitle = document.querySelector(".popup__title-full-screen")

            this._openPopup(this.popupTypeImage);
            this.fullScreenImage.alt = this._name
            this.fullScreenImage.src = this._link;
            this.fullScreenImageTitle.textContent = this._name;
        })
    }
}


