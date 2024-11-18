# 7-html-css-js-calculator
## Калькулятор на html, css и js

<img src="https://github.com/TeachKait20/NoneCode/blob/main/calc+html+css+js/hello.gif?raw=true">

Создание работающего калькулятора начинается со структуры. Рассмотрим, как её спроектировать, шаг за шагом.

Для работы калькулятора нужны:

* Поля ввода чисел (для двух чисел).
* Выбор оператора (например, через выпадающий список или кнопки).
* Кнопка для выполнения операции (например, =).
* Поле для отображения результата.

### HTML часть

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="input-block">
        <input id="number1" type="number" placeholder="Введите число 1">

        <select name="znak">
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="divide">/</option>
            <option value="multiply">*</option>
        </select>

        <input id="number2" type="number" placeholder="Введите число 2">

        <button id="calculate">=</button>
    </div>

    <div id="output-block">
        <output id="out"></output>
    </div>
    
    <script src="scripts.js"></script>
</body>
</html>
```

Что происходит в вашем блоке `<body>` по каждому элементу:

**1.** `<div id="input-block">` <br>
Этот блок отвечает за ввод данных пользователем. Он содержит три основных элемента для работы с калькулятором:  <br>

**2.** `<input id="number1" type="number" placeholder="Введите число 1">`<br>
Это поле ввода для первого числа.<br>
Атрибуты:<br>
* `id="number1"` - позволяет уникально идентифицировать элемент в JavaScript.<br>
* `type="number"` - задаёт тип ввода, позволяя пользователю вводить только числа.<br>
* `placeholder="Введите число 1"` - текст-заполнитель, отображаемый до ввода данных.<br>

**3.** `<select name="znak"><br>`

Выпадающий список для выбора математической операции.<br>
Атрибуты:<br>
* `name="znak"` - используется для группировки данных (например, в формах).<br>
Внутри списка:<br>
Каждый `<option>` представляет одну из операций:<br><br>
* `value="plus"` - для сложения (+).<br>
* `value="minus"` - для вычитания (-).<br>
* `value="divide"` - для деления (/).<br>
* `value="multiply"` - для умножения (*).<br><br>

**4.** `<input id="number2" type="number" placeholder="Введите число 2">`<br>

Второе поле ввода числа, аналогично первому (number1).<br>

**5.** `<button id="calculate">=</button>`
Кнопка для выполнения вычислений.<br>
Атрибуты:<br>
* `id="calculate"` - используется в JavaScript для привязки обработчика событий.<br>
Текст = на кнопке указывает её функцию — получение результата.<br>

<img src="https://github.com/TeachKait20/NoneCode/blob/main/calc+html+css+js/html.gif?raw=true">

## CSS часть

```css
body {
    margin: 0; /* Убирает стандартные отступы браузера. */
    padding: 0; /* Убирает стандартные отступы браузера. */
    background-color: black; /* Устанавливает чёрный цвет фона страницы. */
}

#input-block {
    width: 100%; /* Элемент занимает всю ширину страницы. */
    margin-top: 200px; /* Создаёт отступ сверху (200px), чтобы блок находился ниже. */
    display: flex; /* Включает флексбокс для управления расположением вложенных элементов. */
    justify-content: center; /* Центрирует элементы внутри по горизонтали. */
}

input {
    width: 300px; /* Устанавливает размеры поля ввода. */
    height: 100px; /* Устанавливает размеры поля ввода. */
    outline: none; /* Убирает обводку при фокусе (заменяется на пользовательскую стилизацию) */
    border-radius: 20px; /* Скругляет углы. */
    border: 3px solid salmon; /* Создаёт рамку шириной 3px с цветом salmon. */
    background: black; /* Чёрный фон. */
    color: white; /* Белый текст. */

    font-size: 30px; /* Размер шрифта. */
    font-family: 'Courier New', Courier, monospace; /* Использует моноширинный шрифт. */
    font-weight: bold; /* Делает текст жирным. */
}

select {
    width: 100px; /* Устанавливает ширину списка 100px. */
    height: auto; /* Высота подстраивается под содержимое */
    border-radius: 20px; /* Скруглённые углы. */
    border: 3px solid salmon; /* Рамка шириной 3px. */
    margin: 0 15px; /* Создаёт отступы слева и справа (по 15px). */
    background: black; /* Чёрный фон и белый текст. */

    font-size: 30px; /* Размер шрифта. */
    font-family: 'Courier New', Courier, monospace; /* Моноширинный шрифт. */
    font-weight: bold; /* Жирный шрифт. */
    text-align: center; /* Текст в центре. */
    color: white; /* Цвет текста. */
}

#calculate {
    width: 100px; /* Ширина кнопки фиксирована. */
    height: auto; /* Высота подстраивается.  */
    border-radius: 20px; /* Скруглённые углы. */
    border: 3px solid salmon; /* Создаёт рамку шириной 3px с цветом salmon. */
    margin-left: 15px; /* Отступ слева от кнопки (разделяет её с соседним элементом). */
    background: black; /* Цвет заливки. */

    font-family: 'Courier New', Courier, monospace; /* Моноширинный шрифт. */
    font-weight: bold; /* Жирный шрифт. */
    font-size: 30px; /* Размер шрифта. */
    text-align: center; /* Центрирует текст внутри кнопки. */
    color: white; /* Цвет шрифта. */
}

#calculate:hover {
    cursor: pointer; /* Меняет курсор на указатель при наведении. */
    background: rgb(29, 29, 29); /* При наведении фон становится темнее. */
    transform: scale(1.05); /* Увеличивает кнопку на 5% при наведении. */
}

#output-block {
    width: 100%; /* Блок занимает всю ширину. */
    margin-top: 20px; /* Отступ сверху от предыдущего элемента. */
    display: flex; /* Центрирует содержимое по горизонтали. */
    justify-content: center; /* Центрирует содержимое по горизонтали. */
}

#out {
    width: 300px; /* Фиксированные размеры блока вывода. */
    height: 100px; /* Фиксированные размеры блока вывода. */
    border-radius: 20px; /* Скруглённые углы. */
    border: 3px solid salmon; /* Рамка и цвет. */

    display: flex; /* Включает флексбокс для центрирования содержимого. */
    justify-content: center; /* Центрирует текст по горизонтали и вертикали. */
    align-items: center; /* Центрирует текст по горизонтали и вертикали. */

    font-family: 'Courier New', Courier, monospace; /* Моноширинный жирный шрифт. */
    font-weight: bold; /* Жирный шрифт. */
    font-size: 30px; /* Размер шрифта. */
    text-align: center; /* Центрирует текст внутри блока. */
    color: white; /* Цвет шрифта. */
}
```
<img src="https://github.com/TeachKait20/NoneCode/blob/main/calc+html+css+js/html+css.gif?raw=true">

## JS часть

```javascript
// Получение элементов
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operator = document.querySelector('select[name="znak"]');
const calculateButton = document.getElementById('calculate');
const output = document.getElementById('out');

// Функция для расчета
function calculate() {
    const num1 = parseFloat(number1.value); // Преобразуем значение в число
    const num2 = parseFloat(number2.value);
    const selectedOperator = operator.value;

    let result;

    // Проверка ввода
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Введите оба числа';
    } else {
        // Выполнение операций
        switch (selectedOperator) {
            case 'plus':
                result = num1 + num2;
                break;
            case 'minus':
                result = num1 - num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Деление на ноль невозможно';
                }
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            default:
                result = 'Выберите операцию';
        }
    }

    // Вывод результата
    output.textContent = result;
}

// Обработчик событий для кнопки
calculateButton.addEventListener('click', calculate);
```
**1.** `getElementById('...')` - Находит элементы по их id.

* `number1` и `number2` - Поля ввода для первого и второго числа.
* `calculateButton` - Кнопка для расчёта.
* `output` - Блок, где будет отображаться результат.
* `querySelector('select[name="znak"]')` - Находит <select> по атрибуту name="znak". Здесь пользователь выбирает оператор (плюс, минус и т.д.).

**2.** `parseFloat(number1.value)` - Преобразует строковое значение поля ввода в число с плавающей точкой.

* `number1.value` — значение из поля ввода первого числа.
* `num1` и `num2` теперь содержат числа, введённые пользователем.
* `operator.value` - Получает текущий выбранный оператор из выпадающего списка.
* `let result;` - Создаёт переменную для хранения результата вычисления.

**3.** `sNaN(value)` - Проверяет, является ли значение NaN (не числом). <br>
Если хотя бы одно из чисел не является числом, выводится сообщение "Введите оба числа".

**4.** `switch (selectedOperator)` - Проверяет значение оператора и выполняет соответствующую операцию (аналог `if`):
* `case 'plus':` - Сложение (+).
* `case 'minus':` - Вычитание (-).
* `case 'divide':` - Деление (/), с проверкой деления на ноль.
* `case 'multiply'`: - Умножение (*).
* default:` - Если оператор не выбран, выводится сообщение "Выберите операцию".

**5.** `output.textContent` - Устанавливает текст внутри элемента с id="out", который отобразит результат.

**6.** `addEventListener('click', calculate)` - Добавляет событие клика на кнопку с вызовом функции calculate. <br>
Когда пользователь нажимает кнопку "=", выполняется функция calculate, и результат отображается на экране.

<img src="https://github.com/TeachKait20/NoneCode/blob/main/calc+html+css+js/html+css+js.gif?raw=true">
