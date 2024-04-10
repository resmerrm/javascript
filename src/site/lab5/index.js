// 1.1. Функція для обчислення площі прямокутника
function computeAreaOfARectangle(length, width) {
    return length * width;
}

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

// 1.2. Функція для обчислення площі кола
function computeAreaOfACircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

var output = computeAreaOfACircle(4);
console.log(output); // -> 50.26548245743669

// 1.3. Функція для обчислення числа, піднесеного до степеня
function computePower(number, exponent) {
    return Math.pow(number, exponent);
}

var output = computePower(2, 3);
console.log(output); //--> 8

// 1.4. Функція для обчислення квадратного кореня числа
function computeSquareRoot(number) {
    return Math.sqrt(number);
}

var output = computeSquareRoot(9);
console.log(output); // -> 3

// 1.5. Функція для обчислення суми букв у трьох словах
function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); //--> 14

// 1.6. Функція для об'єднання двох масивів
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); //--> [1, 2, 3, 4]

// 1.7. Функція для обчислення добутку всіх елементів масиву за певним ключем об'єкту
function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }

    return obj[key].reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

var obj = {
    key: [1, 2, 3, 4]
};

var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); //--> 24

// 1.8. Функція для обчислення суми всіх цифр числа
function sumDigits(number) {
    var sum = 0;
    var numStr = Math.abs(number).toString(); // переводимо число у рядок і беремо його модуль для обробки від'ємних чисел

    for (var i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    // перевірка на від'ємність та зміну суми, якщо число від'ємне
    if (number < 0) {
        sum *= -1;
    }

    return sum;
}

var output = sumDigits(1148);
console.log(output); //--> 14

var output = sumDigits(-316);
console.log(output); //--> 4

// 1.9. Функція для пошуку найкоротшого слова серед змішаних елементів
function findShortestWordAmongMixedElements(arr) {
    let shortestWord = ""; // Ініціалізуємо найкоротше слово як порожній рядок

    for (let i = 0; i < arr.length; i++) {
        // Перевіряємо, чи є поточний елемент рядком і чи є він коротшим за поточне найдовше слово
        if (typeof arr[i] === 'string' && (shortestWord === "" || arr[i].length < shortestWord.length)) {
            shortestWord = arr[i];
        }
    }

    return shortestWord; // Повертаємо найкоротше слово
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, "three"]);
console.log(output); // -> "two"

// 1.10. Функція для пошуку найменшого числа серед змішаних елементів
function findSmallestNumberAmongMixedElements(arr) {
    let smallestNumber = Infinity; // Ініціалізуємо найменше число як нескінченність

    for (let i = 0; i < arr.length; i++) {
        // Перевіряємо, чи є поточний елемент числом і чи є він меншим за поточне найменше число
        if (typeof arr[i] === 'number' && arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }

    // Перевірка, чи змінена найменше число відповідає початковій ініціалізації (тобто, чи був масив пустим або не містить чисел)
    if (smallestNumber === Infinity) {
        return ""; // Повертаємо порожній рядок
    }

    return smallestNumber; // Повертаємо найменше число
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // 4

// 1.11. Функція для обчислення залишку ділення
function modulo(num1, num2) {
    if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
        return NaN; // Повертаємо NaN відповідно до вказаних умов
    }
    let remainder = Math.abs(num1); // Беремо модуль першого числа
    let divisor = Math.abs(num2); // Беремо модуль другого числа

    while (remainder >= divisor) {
        remainder -= divisor; // Віднімаємо дільник від діленого, поки ділене більше або дорівнює дільнику
    }

    // Повертаємо залишок з врахуванням знаку першого числа
    return num1 < 0 ? -remainder : remainder;
}

var output = modulo(25, 4);
console.log(output); // 1

// 1.12. Функція для перевертання (відзеркалення) кожного фрагменту з рядка, довжина якого більше n
function flipEveryNChars(input, n) {
    let result = '';
    for (let i = 0; i < input.length; i += n) {
        let chunk = input.substring(i, i + n);
        result += chunk.split('').reverse().join('');
    }
    return result;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); //--> ohs axe trelpma

// 1.13. Функція для знаходження єдиного парного або непарного числа
function detectOutlierValue(input) {
    let numbers = input.split(' ').map(Number);
    let oddCount = numbers.filter(num => num % 2 !== 0).length;
    let evenCount = numbers.length - oddCount;

    let outlierIndex = 0; // Індекс викиду (непарного чи парного числа)
    if (oddCount === 1) {
        outlierIndex = numbers.findIndex(num => num % 2 !== 0) + 1;
    } else if (evenCount === 1) {
        outlierIndex = numbers.findIndex(num => num % 2 === 0) + 1;
    }

    let outlierType = (oddCount === 1) ? 'odd' : 'even';

    return outlierIndex + ' ' + ((outlierType === 'odd') ? 'Third' : 'Second') + ' number is ' + outlierType + ', while the rest of the numbers are ' + ((outlierType === 'odd') ? 'even' : 'odd');
}

console.log(detectOutlierValue("2 4 7 8 16"));
//-> 3 Third number is odd, while the rest of the numbers are even

console.log(detectOutlierValue("110 1 1"));
//-> 2 Second number is even, while the rest of the numbers are odd

// 1.14. Функція для пошуку пари чисел, які при додаванні дають задану суму
function findPairForSum(arr, targetSum) {
    let pairs = [];
    let seen = new Set();

    for (let num of arr) {
        let complement = targetSum - num;

        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }

        seen.add(num);
    }

    return pairs;
}

var pair = findPairForSum([3, 34, 4, 12, 2], 9);
console.log(pair); //--> [[4, 5]] // 4+5=9

// 1.15. Функція для перевірки, чи є два рядки дзеркальним відображенням один одного
function areStringsMirror(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    let doubledString = string1 + string1;

    return doubledString.includes(string2);
}

console.log(areStringsMirror('hello world', 'orldhello w')); //--> true

// 1.16. Функція для бінарного пошуку
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Якщо елемент не знайдено
}

var arr = [1, 3, 16, 22, 31, 33, 34];
console.log(binarySearch(arr, 31)); //--> 4 (індекс в масиві)

// 1.17. Функція для перевірки, чи є рядок ізограмою
function isIsogram(str) {
    let charSet = new Set();

    for (let char of str.toLowerCase()) {
        if (char !== ' ' && charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

console.log(isIsogram('hello')); // --> false
console.log(isIsogram('world')); // --> true

// 1.18. Функція для перевірки, чи є слово паліндромом
function isPalindrome(word) {
    let sanitizedWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Видаляємо всі символи, окрім букв і цифр
    let reversedWord = sanitizedWord.split('').reverse().join('');
    return sanitizedWord === reversedWord;
}

console.log(isPalindrome('level')); // --> true
console.log(isPalindrome('hello')); // --> false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // --> true
