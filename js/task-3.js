// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  let arrStr = string.split(" ");
  let longestWord = arrStr[0];
  for (let i = 0; i < arrStr.length; i += 1) {
    if (arrStr[i].length > longestWord.length) {
      longestWord = arrStr[i];
    }
  }
  return longestWord;
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
