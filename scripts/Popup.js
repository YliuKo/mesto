class Popup {
    constructor() {
        this._closePopupEsc = this._closePopupEsc.bind(this);
        this._addTextSubtitle = this._addTextSubtitle.bind(this);
        this. _addCardData = this. _addCardData.bind(this);
        this.popupProfile = document.querySelector('.popup_type_edit')
        this.addPopup = document.querySelector('.popup_type_add');
        this.popupFullscreen = document.querySelector('.popup_type_photo');
        this.popupConteiner = this.popupProfile.querySelector('.popup__container');
        this.formEditProfile = this.popupProfile.querySelector('.popup__form');
        this.formAddCard = this.addPopup.querySelector('.popup__form_type_add'); //завела модификатор для обращения к отдельным поапапм, формам или еще чему-то повторяющемуся
        this.buttonClosePopupEditProfile = this.popupProfile.querySelector('.popup__close-button'); //
        this.buttonOpenPopupEditProfile = document.querySelector('.profile__edit-button');
        this.submitaddPopup = this.popupProfile.querySelector('.popup__save-button');
        this.buttonHeart = document.querySelectorAll('.element__heart');
        this.buttonAdd = document.querySelector('.profile__add-button');
        this.buttonCloseAddCardPopup = this.addPopup.querySelector('.popup__close-button'); //
        this.popupAddButton = this.addPopup.querySelector('.popup__add-button');
        this.buttonClosePopupImage = this.popupFullscreen.querySelector('.popup__close-button');
        this.nameInput = this.popupProfile.querySelector('.popup__input_data-name');
        this.descriptionInput = this.popupProfile.querySelector('.popup__input_data-description');
        this.placeInput = this.addPopup.querySelector('.popup__input_data-title'); //классы для инпутов
        this.imageInput = this.addPopup.querySelector('.popup__input_data-photo'); //--//--
        this.title = document.querySelector('.profile__name');
        this.subtitle = document.querySelector('.profile__subtitle');
        this.cardsList = document.querySelector('.elements');
        this.cardTemplate = document.querySelector('.card-template').content;
        this.fullscreenPicture = this.popupFullscreen.querySelector('.popup__image-full-screen');
        this.fullscreenName = this.popupFullscreen.querySelector('.popup__title-full-screen');
        this.popupList = Array.from(document.querySelectorAll('.popup')) //поиск попап
    }

    openPopup(popup) {
        popup.classList.add('popup_open');
        document.addEventListener('keydown', this._closePopupEsc);
    }

    closePopup(popup) {
        popup.classList.remove('popup_open');
        document.removeEventListener('keydown', this._closePopupEsc);
    }

    closePopupOverlay() {
        this.popupList.forEach((popup) => { //закрытие по оверлей
            popup.addEventListener('mouseup', (evt) => {
                const targetClassList = evt.target.classList;
                if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
                    this.closePopup(popup);
                }
            })
        })
    }

    _closePopupEsc(event) { // закрыте по Esc
        if (event.key === 'Escape') {
            const openPopup = document.querySelector('.popup_open');
            this.closePopup(openPopup)
        }
    }

    resetPopup(popup) {
        const popupForm = popup.querySelector('.popup__form');
        popupForm.reset();

        const inputs = popup.querySelectorAll(validationConfig.inputSelector);
        const errors = popup.querySelectorAll('.popup__text-error');

        inputs.forEach((input) => {
            input.classList.remove(validationConfig.inputErrorClass);
        })
        errors.forEach((error) => {
            error.classList.remove(validationConfig.errorClass);
        })
    }

    createCard(item) { //создание карточки;
        const oneCard = this.cardTemplate.cloneNode(true);
        const cardText = oneCard.querySelector('.element__title'); //заголовка текстконтент
        cardText.textContent = item.name;
        const cardPath = oneCard.querySelector('.element__image');
        cardPath.alt = item.name;
        cardPath.src = item.link;


        const buttonHeart = oneCard.querySelector('.element__heart'); //сердце(лайк)
        buttonHeart.addEventListener('click', function () {
            buttonHeart.classList.toggle('element__heart_active');
        });

        const buttonDeleteCard = oneCard.querySelector('.element__heart-delete'); //удаление сердца
        buttonDeleteCard.addEventListener('click', function (event) {
            event.target.closest('.element').remove();
        })

        cardPath.addEventListener('click', () => {
            this.fullscreenPicture.src = item.link;
            this.fullscreenPicture.alt = item.name;
            this.fullscreenName.textContent = item.name;
            this.openPopup(this.popupFullscreen);
        });
        return oneCard;
    };

    openEditProfilePopup() {
        this.buttonOpenPopupEditProfile.addEventListener('click', () => {
            this.resetPopup(this.popupProfile);
            this.openPopup(this.popupProfile);
            this.nameInput.value = this.title.textContent; // при открытии поапа поля формы заполнятся данными из профиля
            this.descriptionInput.value = this.subtitle.textContent;
        });
    }

    _addTextSubtitle(evt) {
        evt.preventDefault();
        this.title.textContent = this.nameInput.value;
        this.subtitle.textContent = this.descriptionInput.value;
        this.closePopup(this.popupProfile);
    }

    submitPopupData() {
        this.formEditProfile.addEventListener('submit', this._addTextSubtitle);

        this.buttonAdd.addEventListener('click', () => {
            this.disableSubmitForPopup(this.addPopup);
            this.resetPopup(this.addPopup);
            this.openPopup(this.addPopup);
        });
    }

    renderCards() {
        initialCardsList.forEach(newItem => {
            const cardHtml = this.createCard(newItem);
            this.cardsList.prepend(cardHtml);
        })
    }

    _addCardData(event){
        event.preventDefault();
            const newCard = {
                name: this.placeInput.value,
                link: this.imageInput.value
            }
            this.cardsList.prepend(this.createCard(newCard));
            this.closePopup(this.addPopup);
    }

    submitCardList() {
        this.formAddCard.addEventListener('submit', this._addCardData)
    }

    disableSubmitForPopup(popup) {
        const submitButton = popup.querySelector(validationConfig.submitButtonSelector);
        submitButton.classList.add(validationConfig.inactiveButtonClass);
        submitButton.disabled = true;
    }
}

validationConfig = new FormValidator('.popup__form', '.popup__input',
    '.popup__save-button', 'popup__save-button_disabled',
    'popup__input_error', 'popup__text-error_visible');
validationConfig.enableValidation(validationConfig);

popup = new Popup();
popup.renderCards();
popup.closePopupOverlay();
popup.submitPopupData();
popup.submitCardList();
popup.openEditProfilePopup();
popup._closePopupEsc();