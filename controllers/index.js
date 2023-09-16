const getName = (req, res, next) => {
  res.send('Zolzaya Oyunkhand Wadsworth');
};

const getNameTwo = (req, res, next) => {
  res.send('Zolzaya is testing the second route.');
};

module.exports = {getName, getNameTwo};