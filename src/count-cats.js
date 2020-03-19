module.exports = function countCats(array) {

    return array.flat().filter(el => el === '^^').length;
};
