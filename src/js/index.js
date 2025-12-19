// 1. Активируем методы боя для класса Player и его наследников
import './characters/Player.BattleMethods.js'; 

// 2. Импортируем стили
import '../css/style.css'; 

// 3. Импортируем функцию play из файла game.js
import { play } from './game.js';

// 4. Импортируем конкретные классы персонажей, которых будем использовать
import { Warrior } from './characters/Warrior.js';
import { Archer } from './characters/Archer.js';

console.log('Webpack Entry Point: Запуск приложения.');

// 5. Создаем персонажей
const p1 = new Warrior(0, 'Роберт');
const p2 = new Archer(15, 'Эльф');
const p3 = new Warrior(5, 'Конан');

const allParticipants = [p1, p2, p3];

// 6. Запускаем симуляцию, передавая массив игроков
play(allParticipants);