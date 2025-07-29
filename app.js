import { randomPairsPlayers, updatePlayerList } from './function.js';

// Элементы DOM
const nameInput = document.getElementById('name-input');
const nameBtn = document.getElementById('name-btn');
const nameList = document.getElementById('name-list');
const clearBtn = document.getElementById('clear-btn');
const randomBtn = document.getElementById('random-btn');
const nameListPairs = document.getElementById('name-list-pairs');
const removeBtn = nameList;

// Данные
let names = []; // Массив игроков
let pairsPlayers = []; // Массив пар

// Добавление игрока
nameBtn.addEventListener('click', () => {
  const name = nameInput.value.trim(); // Получаем значение из input и убираем лишние пробелы
  if (name && !names.includes(name)) {
    names.push(name);
    nameInput.value = '';

    updatePlayerList(nameList, name); // Обновляем список игроков
  }
});

// Очистка списков
clearBtn.addEventListener('click', () => {
  names = [];
  pairsPlayers = [];

  nameList.innerHTML = '';
  nameListPairs.innerHTML = '';
});

// Генерация пар
randomBtn.addEventListener('click', () => {
  nameListPairs.innerHTML = ''; // Очищаем предыдущие пары
  pairsPlayers = randomPairsPlayers(names); // Получаем новые пары

  // Отображаем пары
  if (pairsPlayers.length > 0) {
    pairsPlayers.forEach((pair) => {
      const pairElement = document.createElement('li');
      pairElement.innerHTML = `
          <span>${pair[0]} + ${pair[1]}</span>`;
      nameListPairs.appendChild(pairElement);
    });
  }

  console.log(pairsPlayers);
  console.log(pairsPlayers.length);
});

// Удаление игрока
removeBtn.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const name = event.target.previousElementSibling.textContent;
    names = names.filter((n) => n !== name);
    event.target.parentElement.remove(); // Удаляем элемент из DOM
  }
  console.log(names);
});
