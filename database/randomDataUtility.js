//creates a randomNumber from 0 to quantity-1
const getRandNum = (quantity) => {
  const id = Math.floor(Math.random() * quantity);
  return id;
};

//creates a string of random Numbers useful for codes with leading 0's
const createRandNumString = (length) => {
  let numString = '';
  for (let i = 0; i < length; i++) {
    const num = getRandNum(10);
    const digit = Number.parseInt(num);
    numString += digit;
  }
  return numString;
};

//chooses a random element to be used with the randomizer library
const getRandomElement = (array) => {
  const arrLength = array.length;
  return array[getRandNum(arrLength)];
};

//fills the property object. inputs assume an object sorted with required inputs coming first and optional inputs coming after
// const fillRandomPropertyKeys = (object, firstOptionalKey = null) => {

const fillRandomPropertyKeys = (object, firstOptionalKey = null) => {
  const obj = {};
  const properties = Object.keys(object);
  let optionalIndex;
  properties.forEach((element, index) => {
    if (element === firstOptionalKey) {
      console.log('index', index);
      optionalIndex = index;
    }
  });
  console.log('optionalIndex', optionalIndex);
  const optionalCount = getRandNum
  (properties.length - optionalIndex) + optionalIndex;
  //improve randomization algorithm if time permits
  let index = 0;
  for (let each in object) {
    if (index < optionalIndex) {
      obj[each] = object[each];
      index++;
    } else if (index < (optionalIndex + optionalCount)) {
      obj[each] = object[each];
      index++;
    } else {
      obj[each] = '';
    }
  }
  return obj;
};

module.exports = {
  getRandNum,
  createRandNumString,
  getRandomElement,
  fillRandomPropertyKeys
};