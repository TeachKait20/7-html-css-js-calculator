# 7-html-css-js-calculator
## Калькулятор на htm, css и js

<img src="hello world">

Создание работающего калькулятора начинается со структуры. Рассмотрим, как её спроектировать, шаг за шагом.

Для работы калькулятора нужны:

* Поля ввода чисел (для двух чисел).
* Выбор оператора (например, через выпадающий список или кнопки).
* Кнопка для выполнения операции (например, =).
* Поле для отображения результата.

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

**1.1.** `<input id="number1" type="number" placeholder="Введите число 1">`<br>
Это поле ввода для первого числа.<br>
Атрибуты:<br>
* `id="number1"` - позволяет уникально идентифицировать элемент в JavaScript.<br>
* `type="number"` - задаёт тип ввода, позволяя пользователю вводить только числа.<br>
* `placeholder="Введите число 1"` - текст-заполнитель, отображаемый до ввода данных.<br>

**1.2.** `<select name="znak"><br>`

Выпадающий список для выбора математической операции.<br>
Атрибуты:<br>
`name="znak"` - используется для группировки данных (например, в формах).<br>
Внутри списка:<br>
Каждый `<option>` представляет одну из операций:<br><br>
* `value="plus"` - для сложения (+).<br>
* `value="minus"` - для вычитания (-).<br>
* `value="divide"` - для деления (/).<br>
* `value="multiply"` - для умножения (*).<br><br>

**1.3.** `<input id="number2" type="number" placeholder="Введите число 2">`<br>

Второе поле ввода числа, аналогично первому (number1).<br>

**1.4.** `<button id="calculate">=</button>`<br>

Кнопка для выполнения вычислений.<br>
Атрибуты:<br>
* `id="calculate"` - используется в JavaScript для привязки обработчика событий.<br>
Текст = на кнопке указывает её функцию — получение результата.<br>
