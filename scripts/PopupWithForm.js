import Popup from "./Popup.js";

class PopupWithForm extends Popup {
   constructor(popup, submitCallback){
        super(popup);
        this.submitCallback = submitCallback;
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
      document.addEventListener('keydown', this._handleEscClose);
      this.popup.addEventListener('mouseup', (evt) => {
         const targetClassList = evt.target.classList;
         if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
            this.close()
         }
      })
      this.popup.addEventListener('submit', (evt) => {
         this.submitCallback(evt, this._getInputValues())
      })
   }
}

export {PopupWithForm}