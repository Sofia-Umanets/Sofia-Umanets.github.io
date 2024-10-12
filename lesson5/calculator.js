document.getElementById('calculate').addEventListener('click', function() {

    let productPrice = parseFloat(document.getElementById('product').value);
    let count = document.getElementById("quantity").value.match(/^[1-9]\d*$/);
    if (count===null) {
        document.getElementById('result').textContent = 'Введите целое число больше нуля для количества товара!';
        return; 
    }
    let totalCost = productPrice * count;

    document.getElementById('result').textContent = 'Стоимость заказа ' + totalCost + ' монет.';
});
