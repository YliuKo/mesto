import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    open(imageSelector, imagelink, descriptionSelector, description) {
        this.popup.classList.add('popup_open');
        this.setEventListeners();
        imageSelector.src = imagelink;
        imageSelector.alt = description;
        descriptionSelector.textContent = description;
        console.log('opened!');
    }
}
