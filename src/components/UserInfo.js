export default class UserInfo {
  constructor(nameElement, descriptionElement) {
    this.nameElement = nameElement;
    this.descriptionElement = descriptionElement;
    this.nameElement.textContent = "Name";
    this.descriptionElement.textContent = "Description";
  }

  getUserInfo() {
    const userInfo = {
      "input-name": this.nameElement.textContent,
      "input-description": this.descriptionElement.textContent,
    };

    return userInfo;
  }

  setUserInfo(name, description) {
    this.nameElement.textContent = name;
    this.descriptionElement.textContent = description;
  }
}