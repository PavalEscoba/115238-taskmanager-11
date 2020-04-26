import {COLORS} from "../consts.js";

const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
  `Wash dishes`,
  `Help relatives`,
  `Think about eternity`
];

const getRandomIntegerNumber = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

const getRandomArrayItem = (array) => {
  const itemPosition = getRandomIntegerNumber(0, array.length - 1);

  return array[itemPosition];
};
const getBool = () => {
  return Math.random() > 0.5;
};

const getRandomDate = () => {
  // get date in format "Sat Nov 30 2019 21:22:41 GMT+0300 (Москва, стандартное время)"
  const targetDate = new Date();
  // get +/- days from today
  const sign = Math.random() > 0.5 ? 1 : -1;
  // as value from this function should be +/- some (from 0 to 7) days from today we calculate this difference
  const diffValue = sign * getRandomIntegerNumber(0, 7);
  // here we set the day of the month to the day of the month we already have +/- difference
  targetDate.setDate(targetDate.getDate() + diffValue);
  return (targetDate);
};

// days when task should be repeated
const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {'mo': getBool(), 'tu': getBool(), 'we': getBool(), 'th': getBool(), 'fr': getBool(), 'sa': getBool(), 'su': getBool()});
};


const generateTask = () => {
  const dueDate = getBool() ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    color: getRandomArrayItem(COLORS),
    isArchive: getBool(),
    isFavorite: getBool(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
