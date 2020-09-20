module.exports = function repeater(str, options) {
  
  let repeat = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addRepeat = options.additionRepeatTimes || 1;
  let addSeparator = options.additionSeparator || '|';
  let add;
  if (String(options.addition) == 'null' ||
      String(options.addition) ==  'false'){
    add = String(options.addition);
  } else {
    add = options.addition || '';
  };

  str += agregator(add, addRepeat, addSeparator);
  return agregator(str, repeat, separator);
};

function agregator(str, number, separator) {
  let arr = []
  for (let i = 0; i < number; i++) {
    arr[i] = str;
  }
  return arr.join(separator);
}