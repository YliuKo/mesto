export default class UserInfo {
    constructor(nameSelector, descriptionSelector) {
        this.nameSelector = nameSelector;
        this.descriptionSelector = descriptionSelector;
        this.nameSelector.textContent = 'Name';
        this.descriptionSelector.textContent = 'Description';
    }

    getUserInfo(){ 
        const userInfo = {
            name: this.nameSelector.textContent,
            description: this.descriptionSelector.textContent,
        }

        return userInfo;
    }

    setUserInfo(name, description) {
        this.nameSelector.textContent = name;
        this.descriptionSelector.textContent = description;
    }
}