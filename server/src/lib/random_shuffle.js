function shuffle(array) {
  const newArray = [...array];
  let currentIndex = array.length;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [newArray[randomIndex], newArray[currentIndex]] = [
      newArray[currentIndex],
      newArray[randomIndex],
    ];
  }
  return newArray;
}

module.exports = shuffle;
