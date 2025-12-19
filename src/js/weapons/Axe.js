import { Sword } from './Sword.js';

export class Axe extends Sword {
    constructor() {
        super(); // Наследует всё от Sword: name('Меч'), attack(25), durability(500), range(1)

        // переопределяем свойства
        this.name = 'Секира';
        this.attack = 27;

        //меняем прочность и изначальную прочность
        this.durability = 800;
        this.initialDurability = 800;

    }
}