// 1. Додавання атрибута target="_blank" до посилань, які починаються з https://
document.querySelectorAll('a[href^="https://"]').forEach(link => {
    link.setAttribute('target', '_blank');
});

// 2. Зелений фон для всіх <h2> з класом head та розмір шрифту 35px для елементів з класом inner
document.querySelectorAll('h2.head').forEach(h2 => {
    h2.style.backgroundColor = 'green';
});

document.querySelectorAll('h2.head .inner').forEach(inner => {
    inner.style.fontSize = '35px';
});

// 3. Переміщення тегів <div>, які стоять безпосередньо після <h3>
document.querySelectorAll('h3 + div').forEach(div => {
    div.parentNode.insertBefore(div, div.previousElementSibling);
});

// 4. Робить чекбокси неактивними після позначення трьох з них
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedCount = 0;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkedCount++;
            if (checkedCount === 3) {
                checkboxes.forEach(cb => {
                    if (!cb.checked) {
                        cb.disabled = true;
                    }
                });
            }
        }
    });
});

// 5. Деструктурування масиву arr
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // ["Ray", "Bob"]

// 6. Деструктурування об'єкта data
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [, name2, , name4], ages: [, , age2, , age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// 7. Функція mul(), яка повертає добуток чисел типу Number
function mul(...args) {
    let result = args.filter(arg => typeof arg === 'number').reduce((acc, val) => acc * val, 1);
    return result || 0;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// 8. Заміна методів bind() на стрілкові функції
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return this.data + "";
        });
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback => {
            this.result = callback();
        });
    }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// 9. Функція mapBuilder(), яка створює об'єкт типу Map з двох масивів
function mapBuilder(keysArray, valuesArray) {
    const map = new Map();
    keysArray.forEach((key, index) => map.set(key, valuesArray[index]));
    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
