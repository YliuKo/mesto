export default class UserInfo {
  constructor(nameElement, descriptionElement, avatarElement) {
    this.nameElement = nameElement;
    this.descriptionElement = descriptionElement;
    this._avatar = avatarElement;
  }

  getUserInfo() {
    return {
      userName: this.nameElement.textContent,
      aboutUser: this.descriptionElement.textContent,
    };
  }

  setUserInfo(data) {
    this.nameElement.textContent = data.name ? data.name : "";
    this.descriptionElement.textContent = data.about ? data.about : "";
    this._avatar.src = data.avatar ? data.avatar : "";
    this._userId = data._id;
  }

  getUserId() {
    return this._userId;
  }
}
