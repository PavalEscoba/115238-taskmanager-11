const filterNames = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `archive`,
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {name: it, count: Math.floor(Math.random() * 50)};
  });
};

export {generateFilters};
