export function randomPairsPlayers(names) {
  if (names.length === 0 || names.length < 4) {
    alert('Не гони, какой смысл, вас меньше 4х и так?!');
    return;
  }

  // 1. Перемешиваем массив
  const shuffled = [...names];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 2. Создаём пары и возвращаем их
  const pairs = [];
  for (let i = 0; i < shuffled.length; i += 2) {
    if (i + 1 < shuffled.length) {
      pairs.push([shuffled[i], shuffled[i + 1]]);
    } else {
      pairs.push([shuffled[i], 'Без пары']);
    }
  }

  return pairs;
}

export function updatePlayerList(node, id) {
  const listItem = document.createElement('li');

  listItem.innerHTML = `
          <span>${id}</span>
          <button class="remove-btn">×</button>`;
  node.appendChild(listItem);
}
