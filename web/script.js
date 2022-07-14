function summ() {
    let num1 = document.getElementById('first_number').value;
    let num2 = document.getElementById('second_number').value;

    let result = await eel.summator(value1, value2, result)();

    document.getElementById('result').innerHTML = result;
}