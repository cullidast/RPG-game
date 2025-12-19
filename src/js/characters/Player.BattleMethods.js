import { Player } from './Player.js';
import { logToHtml } from '../utils.js'

// --- Методы боя и ИИ, добавленные к прототипу Player ---
Player.prototype.takeAttack = function(damage) {
    logToHtml(`> ${this.name} готовится принять ${damage.toFixed(1)} урона...`);
    
    if (this.isAttackBlocked()) {
        logToHtml(`> ${this.name} блокирует удар! Урон по оружию.`);
        this.weapon.takeDamage(damage); 
        return;
    }

    if (this.dodged()) {
        logToHtml(`> ${this.name} уклоняется от удара!`);
        return;
    }
    
    logToHtml(`> ${this.name} получает ${damage.toFixed(1)} урона в жизнь.`);
    this.takeDamage(damage); 
};



Player.prototype.tryAttack = function(enemy) {
    const distance = Math.abs(this.position - enemy.position);
    logToHtml(`\n${this.name} (Pos: ${this.position}) пытается атаковать ${enemy.name} (Pos: ${enemy.position}) на дистанции ${distance.toFixed(1)}.`);

    if (distance > this.weapon.range) {
        logToHtml(`> ${this.name} не достает до цели. Атака провалена.`);
        return;
    }
    
    const weaponWear = 10 * this.getLuck();
    this.weapon.takeDamage(weaponWear);
    

    let damage = this.getDamage(distance);

    if (distance === 0) {
        logToHtml(`> ${this.name} бьет вплотную! Урон удвоен, цель отскакивает.`);
        damage *= 2; 
        enemy.takeAttack(damage);
        enemy.moveRight(1); 
    } else {
        enemy.takeAttack(damage);
    }
    
    if (enemy.isDead()) {
        logToHtml(`>>> ${enemy.name} повержен! <<<`);
    }
};

Player.prototype.chooseEnemy = function(players) {
    const aliveEnemies = players.filter(p => p !== this && !p.isDead());
    if (aliveEnemies.length === 0) return null;
    aliveEnemies.sort((a, b) => a.life - b.life);
    return aliveEnemies[0]; // Возвращаем самого раненого врага
};

Player.prototype.moveToEnemy = function(enemy) {
    if (!enemy) return;
    const distanceToEnemy = enemy.position - this.position;
    this.move(distanceToEnemy);
};

Player.prototype.turn = function(players) {
    if (this.isDead()) return;
    logToHtml(`\n--- Ход игрока: ${this.name} ---`);
    
    const enemy = this.chooseEnemy(players);
    if (!enemy) {
        logToHtml(`> ${this.name}: Врагов не осталось. Конец игры.`);
        return;
    }

    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
};