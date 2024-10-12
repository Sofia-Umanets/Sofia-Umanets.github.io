document.getElementById('calculate').addEventListener('click', function() {

    let productPrice = parseFloat(document.getElementById('product').value);

    let count = parseInt(document.getElementById('quantity').value);

    if (typeof count!=='number' || Number.isNaN(count) || count <= 0) {
        document.getElementById('result').textContent = 'Введите целое число больше нуля для количества товара!';
        return; 
    }
    let totalCost = productPrice * count;

    document.getElementById('result').textContent = 'Стоимость заказа ' + totalCost + ' монет.';
});
