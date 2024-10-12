document.getElementById('calculate').addEventListener('click', function() {

    var productPrice = parseFloat(document.getElementById('product').value);

    var count = parseInt(document.getElementById('quantity').value);

    if (typeof count!=='number' || Number.isNaN(count) || count <= 0) {
        document.getElementById('result').textContent = 'Введите целое число больше нуля для количества товара!';
        return; 
    }
    var totalCost = productPrice * count;

    document.getElementById('result').textContent = 'Стоимость заказа ' + totalCost + ' монет.';
});
