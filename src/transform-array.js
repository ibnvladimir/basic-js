module.exports = function transform(arr) {


  if (Object.prototype.toString.call(arr) !== "[object Array]") {
    throw new Error();
  }

  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {


    switch (arr[i]) {
      case "--discard-prev":
        if ((i - 1) >= 0  && (arr[i - 2] !== "--discard-next")) {
          resultArray.pop();
        }
        break;
        
      case "--discard-next":
        if ((i + 1) < arr.length) {
          i++;
        }
        break;
        
      case "--double-next":
        if ((i + 1) < arr.length) {
          resultArray.push(arr[i + 1]);
        }
        break;
        
      case "--double-prev":
        if ((i - 1) >= 0 && (arr[i - 2] !== "--discard-next")) {
          resultArray.push(arr[i - 1]);
        }
        break;
        
      default:
        resultArray.push(arr[i]);
        break;

    }


  }

  return resultArray;
};
