import { Archer } from './characters/Archer.js';
import { Warrior } from './characters/Warrior.js';
import { Mage } from './characters/Mage.js';
import { Dwarf } from './characters/Dwarf.js';
import { Crossbowman } from './characters/Crossbowman.js';
import { Demiurge } from './characters/Demiurge.js';

export function play() {
    console.log('Game function "play" started.');
    // Создание объектов, как вы делали ранее:
    const archer = new Archer(); 
    const dwarf = new Dwarf();
    const demiurge = new Demiurge();
}