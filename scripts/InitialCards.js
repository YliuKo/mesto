class InitialCards{   /** создали класс карточек там лежит 2 обьекта name и link, потом создали экземпляры класса с данными, с помощью метода push создали массив экземпляров и вывели его*/
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

arkhyzCard = new InitialCards('Архыз', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg');
chelyabinskCard = new InitialCards('Челябинская область', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg');
ivanovoCard = new InitialCards( 'Иваново', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg');
kamchatkaCard = new InitialCards('Камчатка',  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg');
kholmogorCard = new InitialCards('Холмогорский район',  'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg');
baikalCard = new InitialCards('Байкал', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg');
initialCardsList = [];
initialCardsList.push(arkhyzCard, chelyabinskCard, ivanovoCard, kamchatkaCard, kholmogorCard, baikalCard);