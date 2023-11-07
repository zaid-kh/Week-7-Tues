Array.prototype.filterZaid = function (callbackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    // if callback returns true -> push to newArray[]
    if (callbackFunction(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log(
  "[2, 2, 3].filterZaid((el) => el === 2): ",
  [2, 2, 3].filterZaid((el) => el === 2)
);

console.log(
  "[23, 66, 98, 5, 13].filterZaid((item) => item % 2 === 0): ",
  [23, 66, 98, 5, 13].filterZaid((item) => item % 2 === 0)
);

Array.prototype.findZaid = function (callbackFunction) {
  for (let i = 0; i < this.length; i++) {
    // if callback returns true -> push to newArray[]
    if (callbackFunction(this[i], i, this)) {
      return this[i];
    }
  }
  console.error("could not find what you are looking for");
};

const names = ["zaid", "ahmad", "mohammad", "ali"];
console.log(
  'names.findZaid("ali"): ',
  names.findZaid((name) => name === "ali")
);
console.log(
  'names.findZaid("e"): ',
  names.findZaid((name) => name === "e")
);
