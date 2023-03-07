class ErrorMessages {
    constructor(tooShort, tooLong, valueMissing, typeMismatch) {
        this.tooShort = tooShort;
        this.tooLong = tooLong;
        this.valueMissing = valueMissing;
        this.typeMismatch = typeMismatch;
    }
}

titleError = new ErrorMessages('Минимальная длина поля - 2 символа', 'Максимальная длина поля - 30 символов', 'Пожалуйста, заполните это поле', null);
photoError = new ErrorMessages(null, null, "Пожалуйста, заполните это поле", "Пожалуйста, введите ссылку");
usernameError = new ErrorMessages('Минимальная длина поля - 2 символа', 'Максимальная длина поля - 40 символов', 'Пожалуйста, заполните это поле', null);
activityError = new ErrorMessages('Минимальная длина поля - 2 символа', 'Максимальная длина поля - 200 символов', 'Пожалуйста, заполните это поле', null);
idTitle = [];
idPhoto = [];
idUsername = [];
idActivity = [];
idTitle['title'] = titleError;
idPhoto['photo'] = photoError;
idUsername['username'] = usernameError;
idActivity['activity'] = activityError;
errorMessagesList = [idTitle, idPhoto, idUsername, idActivity];