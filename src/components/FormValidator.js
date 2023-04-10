export default class FormValidator {
  constructor(formElement, validationConfig) {
    this.formElement = formElement;
    this.formSelector = validationConfig.formSelector;
    this.inputSelector = validationConfig.inputSelector;
    this.submitButtonSelector = validationConfig.submitButtonSelector;
    this.inactiveButtonClass = validationConfig.inactiveButtonClass;
    this.inputErrorClass = validationConfig.inputErrorClass;
    this.errorClass = validationConfig.errorClass;
  }

  showInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.inputErrorClass);
    errorElement.classList.add(this.errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = "";
    errorElement.classList.remove(this.errorClass);
    inputElement.classList.remove(this.inputErrorClass);
  }

  checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this.hideInputError(inputElement);
    } else {
      this.showInputError(inputElement);
    }
  }

  hasInvalidInput() {
    return this.inputList.some((inputElement) => !inputElement.validity.valid);
  }

  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.submitButton.classList.add(this.inactiveButtonClass);
      this.submitButton.disabled = true;
    } else {
      this.submitButton.classList.remove(this.inactiveButtonClass);
      this.submitButton.disabled = false;
    }
  }

  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
    this.submitButton = this.formElement.querySelector(
      this.submitButtonSelector
    );

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  resetValidation() {
    this.inputList.forEach((inputElement) => {
      this.hideInputError(inputElement);
    });
    this.toggleButtonState();
  }

  enableValidation() {
    this.setEventListeners();
  }
}
