//Дана строка с цифрами. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'Первая цифра 1, 2 или 3', в противном случае выведите 'нет'. Проверьте наличие включения вашего номера телефона в строку
const str = prompt('Введите строку с цифрами', '');
if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
    alert('Первая цифра 1, 2 или 3');
} else {
    alert('нет');
}
