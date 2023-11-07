Array.prototype.filterZaid = function (callbackFunction) {
  console.log("zaid's filter function");
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
