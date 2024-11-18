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
