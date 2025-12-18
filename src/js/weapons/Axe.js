import { Sword } from './Sword.js';

export class Axe extends Sword {
    constructor() {
        // Наследуем от Меча, меняем название и урон
        super();
        this.name = 'Топор';
        this.attack = 18;
    }
}