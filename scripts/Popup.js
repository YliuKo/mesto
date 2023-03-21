export default class Popup {
    constructor(popup) {
        this.popup = popup
    }

    open() { 
        this.popup.classList.add('popup_open');
        this.setEventListeners();
        console.log('opened!');
    }

    close() {
        this.popup.classList.remove('popup_open');
        console.log('closed!');
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            close();
        }
    }

    setEventListeners() {
        document.addEventListener('keydown', this._handleEscClose);
        this.popup.addEventListener('mouseup', (evt) => {
            const targetClassList = evt.target.classList;
            if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
                this.close()
            }
        })
    }
}