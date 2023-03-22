import Popup from "./Popup.js";

class PopupWithForm extends Popup {
   constructor(popup, submitCallback){
        super(popup);
        this.submitCallback = submitCallback;
        this.i = 0
        this.submitHandler = (evt) => {
            console.log("submit" + this.i)
            this.i += 1
            this.submitCallback(evt, this._getInputValues())
            this.close();
        }
   }

   close() {
      this.popup.classList.remove('popup_open');
      this.popup.removeEventListener('submit', this.submitHandler);
      console.log('closed!');
  }

   _getInputValues() {
      let inputs = this.popup.getElementsByTagName('input');
      const result = new Map() 
      for (let input of inputs) {
         result.set(input.name, input.value)
      }
      return result;
   }

   setEventListeners() {
      document.addEventListener('keydown', (evt) => {
         this._handleEscClose(evt)
      });
      this.popup.addEventListener('mouseup', (evt) => {
         const targetClassList = evt.target.classList;
         if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
            this.close()
         }
      })
      this.popup.addEventListener('submit', this.submitHandler);
   }
}

export {PopupWithForm}