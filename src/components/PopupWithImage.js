import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImg = this._popup.querySelector(".popup__image-full-screen");
    this._popupTitle = this._popup.querySelector(".popup__title-full-screen");
  }
  open(imagelink, description) {
    this._popupImg.src = imagelink;
    this._popupImg.alt = description;
    this._popupTitle.textContent = description;
    console.log("opened!");
    super.open();
  }
}