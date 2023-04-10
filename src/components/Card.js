export default class Card {
    constructor(card, selector, handleCardClick) {
        console.log("Create card! " + card.name + " " + card.link);
        this._name = card.name;
        this._link = card.link;
        this.selector = selector;
        this.likeCard = this.likeCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this._handleOpenPopup = handleCardClick;
    }

    getCard() {
        return document.querySelector(this.selector).content.querySelector('.element').cloneNode(true);
    }

    createCard() { //создание карточки
        this.oneCard = this.getCard();
        this.cardPath = this.oneCard.querySelector(".element__image");
        this.cardText = this.oneCard.querySelector(".element__title");
        this.buttonDeleteCard = this.oneCard.querySelector(".element__heart-delete");
        this.buttonHeart = this.oneCard.querySelector(".element__heart");

        this.cardPath.alt = this._name;
        this.cardPath.src = this._link;
        this.cardText.textContent = this._name;

        this.eventListeners();

        return this.oneCard;
    }

    likeCard() {
        this.buttonHeart.classList.toggle('element__heart_active');
    }

    deleteCard() {
        this.oneCard.remove();
        this.oneCard = null;
    }

    eventListeners() {
        this.buttonHeart.addEventListener('click', this.likeCard);
        this.buttonDeleteCard.addEventListener('click', this.deleteCard);
        this.cardPath.addEventListener('click', () => {
            this._handleOpenPopup(this._name, this._link);
            console.log("card");
        });
    }
}