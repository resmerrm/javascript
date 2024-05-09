// 1. Функція для перевірки, чи перший символ у рядку написаний у верхньому регістрі
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return `String starts with uppercase character`;
    } else {
        return `String's not starts with uppercase character`;
    }
}

console.log(upperCase('regexp')); // String's not starts with uppercase character
console.log(upperCase('RegExp')); // String starts with uppercase character

// 2. Функція для перевірки, чи рядок є валідним емейлом
function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(checkEmail("Qmail2@gmail.com")); // true

// 3. Регулярний вираз для знаходження патерну "d...b...d"
const regexPattern = /([d])([b]+)([d])/gi;
const string = "cdbBdbsbz";
const matches = string.match(regexPattern);
console.log(matches); // ["dbBd", "bB", "d"]

// 4. Регулярний вираз для міняння місцями двох підстрічок
const inputString = "Java Script";
const outputString = inputString.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(outputString); // "Script, Java"

// 5. Функція для валідації номера банківської картки
function validateCreditCard(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
}

console.log(validateCreditCard("9999-9999-9999-9999")); // true

// 6. Функція для валідації емейлу з вказаними вимогами
function checkEmailFormat(email) {
    const regex = /^[A-Za-z0-9](?:[A-Za-z0-9_-]*[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9_-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9_-]*[A-Za-z0-9])?)+$/;
    return regex.test(email);
}

console.log(checkEmailFormat('my_mail@gmail.com')); // true
console.log(checkEmailFormat('#my_mail@gmail.com')); // false
console.log(checkEmailFormat('my_ma--il@gmail.com')); // false

// 7. Функція для перевірки правильності логіна та пошуку чисел у рядку
function checkLogin(login) {
    const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numbers = login.match(/\d+(\.\d+)?/g);
    return `${regex.test(login)} ${numbers ? numbers.join(', ') : ''}`;
}

console.log(checkLogin('ee1.1ret3')); // true 1.1, 3
console.log(checkLogin('ee1*1ret3')); // false 1, 1, 3
