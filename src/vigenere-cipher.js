const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directionForvard = true) {
    this.isDirectionForvard = directionForvard;
    this.template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.result = [];
    this.source = [];
    this.key = [];
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    this.prepare(message, key);

    for (let i = 0, j = 0; i < this.source.length; i++) {
      if (!this.key[j]) j = 0;

      if (this.template.includes(this.source[i])) {
        let sourceIndex = this.template.indexOf(this.source[i]);
        let keyIndex = this.template.indexOf(this.key[j]);
        let resultIndex = (sourceIndex + keyIndex) % 26;
        this.result.push(this.template[resultIndex]);
        j++;
      } else {
        this.result.push(this.source[i]);
      }
    }

    let result = (this.isDirectionForvard) ? this.result.join('') : this.result.reverse().join('');
    this.clearObject();
    return result;
  }




  decrypt(message, key) {
    if (!message || !key) throw new Error();

    this.prepare(message, key);

    for (let i = 0, j = 0; i < this.source.length; i++) {
      if (!this.key[j]) j = 0;

      if (this.template.includes(this.source[i])) {
        let sourceIndex = this.template.indexOf(this.source[i]);
        let keyIndex = this.template.indexOf(this.key[j]);
        let resultIndex = (sourceIndex - keyIndex + 26) % 26;
        this.result.push(this.template[resultIndex]);
        j++;
      } else {
        this.result.push(this.source[i]);
      }
    }

    let result = (this.isDirectionForvard) ? this.result.join('') : this.result.reverse().join('');
    this.clearObject();
    return result;
   
  }

  prepare(message, key) {
    //приводим строку и ключ к верхнему регистру
    message = message.toUpperCase();
    key = key.toUpperCase();

    //приводим строку и ключ к массиву
    key = Array.from(key);
    message = Array.from(message);

    this.source = message;
    this.key = key;
  }

  clearObject(){
    this.result = [];
    this.source = [];
    this.key = [];
  }

}

module.exports = VigenereCipheringMachine;