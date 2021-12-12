const generateRandomNumbers = (count, min = 1, max = 100) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i += 1) {
    const rand = min + Math.random() * (max + 1 - min);
    randomNumbers.push(Math.floor(rand));
  }
  return randomNumbers;
};

export { generateRandomNumbers };
