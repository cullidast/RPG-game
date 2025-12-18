import { Bow } from './Bow.js';

export class LongBow extends Bow {
    constructor() {
        // Наследуем базовые характеристики Лук, но меняем название и, например, дальность
        super();
        this.name = 'Длинный лук';
        this.range = 4;
    }
}