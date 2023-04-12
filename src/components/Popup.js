export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);

    console.log("opened!");
  }

  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key == "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mouseup", (evt) => {
      const targetClassList = evt.target.classList;
      if (
        targetClassList.contains("popup") ||
        targetClassList.contains("popup__close-button")
      ) {
        this.close();
      }
    });
  }
}
