import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    open(imageSelector, imagelink, descriptionSelector, description) {        
        this.popup.classList.add('popup_open');
        imageSelector.src = imagelink;
        imageSelector.alt = description;
        descriptionSelector.textContent = description;
        console.log('opened!');
        super.open()
    }
}