import { Staff } from './Staff.js'; 

export class StormStaff extends Staff {
    constructor() {
        // Наследуем от Посоха
        super();
        this.name = 'Штормовой посох';
        this.attack = 12;
    }
}