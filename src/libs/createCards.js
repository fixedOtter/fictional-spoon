function createCards(items) {
  const holder = document.getElementById('cardHolder');

  for (let i = 0; i < items.length; i++) {
    holder.insertAdjacentElement('afterbegin', `<p>${items[i]}</p>`);
  }
}

export default createCards;