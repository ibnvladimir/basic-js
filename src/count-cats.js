module.exports = function countCats(all) {
  let counter = 0;

  if (all.length === 0) {
    return counter;
  }

  for (let arr of all) {


    if (arr.length === 0) {
      continue;
    }


    for (let candidate of arr) {
      if (candidate === "^^") {
        counter++;
      }

    }

  }

  return counter;
};
