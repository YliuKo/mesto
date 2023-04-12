import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector("form");
    this._btn = this._form.querySelector(".form__submit");
    this._btnText = this._btn.textContent;
    this._inputList = this._form.querySelectorAll("input");
  }

  close() {
    this._form.reset();
    super.close();
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    const formData = {};
    this._inputList.forEach((inputElement) => {
      formData[inputElement.name] = inputElement.value;
    });
    return formData;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  showLoading(state) {
    if (state) {
      this._btn.textContent = "Сохранение ...";
    } else {
      this._btn.textContent = this._btnText;
    }
  }
}

export { PopupWithForm };
