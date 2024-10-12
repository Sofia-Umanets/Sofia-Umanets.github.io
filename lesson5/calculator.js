document.getElementById('calculate').addEventListener('click', function() {

    let productPrice = parseFloat(document.getElementById('product').value);

    let count = parseInt(document.getElementById('quantity').value,10);

    if (typeof count!=='number' || Number.isNaN(count) || count <= 0 || !Number.isInteger(count)) {
        document.getElementById('result').textContent = 'Введите целое число больше нуля для количества товара!';
        return; 
    }
    let totalCost = productPrice * count;

    document.getElementById('result').textContent = 'Стоимость заказа ' + totalCost + ' монет.';
});
