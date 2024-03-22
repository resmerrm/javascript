// 1.1
<script>
function findMinLengthOfThreeWords(word1, word2, word3) {
  var minLength = Math.min(word1.length, word2.length, word3.length);
  return minLength;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
</script>
// 1.2
<script>
function filterOddElements(arr) {
  return arr.filter(function(num) {
    return num % 2 !== 0;
  });
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); //--> [1, 3, 5]
</script>
// 1.3
<script>
function getLengthOfShortestElement(arr) {
  if (arr.length === 0) return 0; // обробка порожнього масиву
  return arr.reduce(function(minLength, currentWord) {
    return Math.min(minLength, currentWord.length);
  }, Infinity); // початкове значення для пошуку мінімальної довжини
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output);
</script>
// 1.4
<script>
function joinArrayOfArrays(arr) {
  return [].concat.apply([], arr);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output); //--> [1, 4, true, false, 'x', 'y']
</script>
// 1.5
<script>
function findSmallestNumberAmongMixedElements(arr) {
  var numbers = arr.filter(function(item) {
    return typeof item === 'number';
  });

  if (numbers.length === 0) return 0;

  return Math.min(...numbers);
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); //--> 4
</script>
// 1.6
<script>
function computeSummationToN(n) {
  return (n * (n + 1)) / 2;
}

var output = computeSummationToN(6);
console.log(output); // --> 21
</script>
// 1.7
<script>
function convertScoreToGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 82 && score <= 89) {
    return 'B';
  } else if (score >= 75 && score <= 81) {
    return 'C';
  } else if (score >= 69 && score <= 74) {
    return 'D';
  } else if (score >= 60 && score <= 68) {
    return 'E';
  } else if (score >= 35 && score <= 59) {
    return 'Fx';
  } else if (score >= 0 && score <= 34) {
    return 'F';
  } else {
    return 'INVALID SCORE';
  }
}

var output = convertScoreToGrade(91);
console.log(output); //--> 'A'
</script>
// 1.8
<script>
function getLongestOfThreeWords(word1, word2, word3) {
  var longestWord = word1;
  if (word2.length > longestWord.length) {
    longestWord = word2;
  }
  if (word3.length > longestWord.length) {
    longestWord = word3;
  }
  return longestWord;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); //--> 'these'
</script>
// 1.9
<script>
function multiply(num1, num2) {
  var result = 0;
  for (var i = 0; i < num2; i++) {
    result += num1;
  }
  return result;
}

var output = multiply(4, 7);
console.log(output); // --> 28
</script>
// 1.1
<script>