export default class UserInfo {
    constructor(nameSelector, descriptionSelector) {
        this.name = name;
        this.description = description;
        this.name.textContent = 'Name';
        this.description.textContent = 'Description';
    }

    getUserInfo(){ 
        const userInfo = {
            name: this.name.textContent,
            description: this.description.textContent,
        }

        return userInfo;
    }

    setUserInfo(name, description) {
        this.name.textContent = name;
        this.description.textContent = description;
    }
}