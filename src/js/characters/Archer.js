import { Player } from './Player.js'; // Импорт родительского класса
import { Bow } from '../weapons/Bow.js'; // Импорт начального оружия

export class Archer extends Player { // Наследование
    constructor() {
        super(); // Вызов конструктора родителя
        console.log('Создан новый объект Archer.');
        this.type = 'Archer';
        this.health = 100;
        this.currentWeapon = new Bow(); // Устанавливаем начальное оружие
    }
}