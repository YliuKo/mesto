function showInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    const invalidityReason = getInvalidityReason(inputElement.validity)
    errorElement.textContent = errorMessages[inputElement.id][invalidityReason];
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);
    inputElement.classList.remove(config.inputErrorClass);
}

function checkInputValidity(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, submitButton, config) {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(config.inactiveButtonClass);
        submitButton.disabled = true;
    } else {
        submitButton.classList.remove(config.inactiveButtonClass);
        submitButton.disabled = false;
    }
}

function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const submitButton = formElement.querySelector(config.submitButtonSelector);

    formElement.addEventListener('reset', () => {   // собыите `reset` происходит когда вызывается `reset` у формы
        setTimeout(() => {                          // добавим таймаут, чтобы `toggleButtonState` вызвался уже после сохранения формы
            toggleButtonState(inputList, submitButton, config), 0
        })
    })

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, submitButton, config);
        })
    })
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config)
    })
}

function getInvalidityReason(validity) {
    for (let prop in validity) {
        if (validity[prop]) {
            return prop;
        }
    }
    return '';
}