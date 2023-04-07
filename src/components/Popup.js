export default class Popup {
    constructor(popup) {
        this._popup = popup
    }

    open() { 
        this._popup.classList.add('popup_open');
        console.log('opened!');
    }

    close() {
        this._popup.classList.remove('popup_open');
        console.log('closed!');
    }

    _handleEscClose(event) {
        if (event.key == 'Escape') {
            this.close(); 
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) this.close();
        });
        this._popup.addEventListener('mouseup', (evt) => {
            const targetClassList = evt.target.classList;
            if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
                this.close()
            }
        })
    }
}