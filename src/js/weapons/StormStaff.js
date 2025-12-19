import { Staff } from './Staff.js'; 

export class StormStaff extends Staff {
    constructor() {
        super(); // Наследует всё от Staff: attack(8), durability(300), range(2)

        //переопределяем свойства
        this.name = 'посох бури';
        this.attack = 10;
        this.range=3;
    }
}