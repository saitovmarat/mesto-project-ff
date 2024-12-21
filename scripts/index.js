import { initialCards } from './cards.js';

// @todo: Темплейт карточки
const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData) {
  const cardNode = cardsTemplate.cloneNode(true);
  const cardImage = cardNode.querySelector('.card__image');
  const cardTitle = cardNode.querySelector('.card__title');
  const cardDeleteButton = cardNode.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener('click', removeCard);

  return cardNode;
}

// @todo: Функция удаления карточки
function removeCard(e) {
  const cardElement = e.target.closest('.card');
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
function loadCards(cards) {
  cards.forEach(card => {
    const cardNode = createCard(card);
    cardsList.append(cardNode);
  });
}

loadCards(initialCards);


