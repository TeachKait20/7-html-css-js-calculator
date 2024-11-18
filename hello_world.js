const calculateButton = document.getElementById('calculate');
const output = document.getElementById('out');

function sayHello() {
    const res = "Hello World!";
    output.textContent = res;
}


calculateButton.addEventListener('click', sayHello);
