import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {
    super(popup);
    this.submitCallback = submitCallback;
    this._form = this._popup.querySelector("form");
    this.i = 0;
    this.submitHandler = (evt) => {
      console.log("submit" + this.i);
      this.i += 1;
      this.submitCallback(evt, this._getInputValues());
      this.close();
    };
    this._inputList = this._form.querySelectorAll("input");
  }

  close() {
    super.close();
    this._form.reset();
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
    this._popup.addEventListener("submit", this.submitHandler);
    super.setEventListeners();
  }
}

export { PopupWithForm };