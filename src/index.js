module.exports = function toReadable (number) {
  const firstNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const thirdNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numberStr = number.toString();
  let str = '';
  switch(numberStr.length){
    case 1:
        str = firstNumber[numberStr];
      break;
    case 2:
      if (numberStr-10 < 10) {
        str = secondNumber[numberStr - 10];
      } else {
        if (numberStr.slice(-1) === '0') {
          str = thirdNumber[numberStr.slice(0,1) - 2];
        } else {
          str = thirdNumber[numberStr.slice(0,1) - 2] + ' ' + firstNumber[numberStr.slice(-1)];
        }
      }
      break;
    case 3:
      str = firstNumber[numberStr.slice(0,1)] + ' hundred';
      if (numberStr.slice(1,2) === '0' && numberStr.slice(-1) !== '0') {
          str += ' ' + firstNumber[numberStr.slice(-1)];
      } else if (numberStr.slice(1,2) === '1') {
        str += ' ' + secondNumber[numberStr.slice(1) - 10];
      } else if (numberStr.slice(1,2) > 1) {
        if (numberStr.slice(-1) === '0') {
          str += ' ' + thirdNumber[numberStr.slice(1,2) - 2];
        } else {
          str += ' ' + thirdNumber[numberStr.slice(1,2) - 2] + ' ' + firstNumber[numberStr.slice(-1)];
        }
      }
      break;
  }
  return str;
}
