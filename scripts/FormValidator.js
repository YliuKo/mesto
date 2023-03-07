class FormValidator {
    constructor(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
        this.formSelector = formSelector;
        this.inputSelector = inputSelector;
        this.submitButtonSelector = submitButtonSelector;
        this.inactiveButtonClass = inactiveButtonClass;
        this.inputErrorClass = inputErrorClass;
        this.errorClass = errorClass;
    }

    showInputError(formElement, inputElement, config) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        const invalidityReason = this.getInvalidityReason(inputElement.validity)
        let id;
        switch (inputElement.id) {
            case 'title':
                id = 0
                break
            case 'photo':
                id = 1
                break
            case 'username':
               id = 2
                break
            case 'activity':
               id = 3
                break
        }
        errorElement.textContent = errorMessagesList[id][inputElement.id][invalidityReason];
        errorElement.classList.add(config.errorClass);
        inputElement.classList.add(config.inputErrorClass);
    }

    hideInputError(formElement, inputElement, config) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove(config.errorClass);
        inputElement.classList.remove(config.inputErrorClass);
    }

    checkInputValidity(formElement, inputElement, config) {
        if (inputElement.validity.valid) {
            this.hideInputError(formElement, inputElement, config);
        } else {
            this.showInputError(formElement, inputElement, config);
        }
    }

    hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    }

    toggleButtonState(inputList, submitButton, config) {
        if (this.hasInvalidInput(inputList)) {
            submitButton.classList.add(config.inactiveButtonClass);
            submitButton.disabled = true;
        } else {
            submitButton.classList.remove(config.inactiveButtonClass);
            submitButton.disabled = false;
        }
    }

    setEventListeners(formElement, config) {
        const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
        const submitButton = formElement.querySelector(config.submitButtonSelector);

        formElement.addEventListener('reset', () => {   // собыите `reset` происходит когда вызывается `reset` у формы
            setTimeout(() => {                          // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
                this.toggleButtonState(inputList, submitButton, config), 0
            })
        })

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this.checkInputValidity(formElement, inputElement, config);
                this.toggleButtonState(inputList, submitButton, config);
            })
        })
    }

    enableValidation(config) {
        const formList = Array.from(document.querySelectorAll(config.formSelector));
        formList.forEach((formElement) => {
            this.setEventListeners(formElement, config)
        })
    }

    getInvalidityReason(validity) {
        for (let prop in validity) {
            if (validity[prop]) {
                return prop;
            }
        }
        return '';
    }
}