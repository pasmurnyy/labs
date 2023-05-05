//Решите через swith. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).
//
const min = +prompt('Загадайте цифру до 59', '');
switch (min) {
    case (min >= 0 && min <= 14):
        console.log('В первую четверть.');
        break;
    case (min >= 15 && min <= 30) :
        console.log('Во вторую четверть.');
        break;

    case (min >= 31 && min <= 45) :
        console.log('В третью четверть.');
        break;

    case (min >= 46 && min <= 59) :
        console.log('В четвертую четверть.');
        break;

    default:
        console.log('Вы ввели число не до 59');
        break;
}



