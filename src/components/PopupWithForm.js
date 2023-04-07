import Popup from "./Popup.js";

class PopupWithForm extends Popup {
   constructor(popup, submitCallback){
        super(popup);
        this.submitCallback = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this.i = 0
        this.submitHandler = (evt) => {
            console.log("submit" + this.i)
            this.i += 1
            this.submitCallback(evt, this._getInputValues())
            this.close();
        }
   }

   close() {
      super.close();
      this._form.reset();
  }

   _getInputValues() {
      inputs = this.popup.getElementsByTagName('input');
      const result = new Map() 
      for (let input of inputs) {
         result.set(input.name, input.value)
      }
      return result;
   }   

   setEventListeners() {
      super.setEventListeners();
  
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submit();
      });
    }
}

export {PopupWithForm}