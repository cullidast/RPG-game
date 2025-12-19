import { Player } from './Player.js';

// --- Методы боя и ИИ, добавленные к прототипу Player ---
Player.prototype.takeAttack = function(damage) {
    console.log(`> ${this.name} готовится принять ${damage.toFixed(1)} урона...`);
    
    if (this.isAttackBlocked()) {
        console.log(`> ${this.name} блокирует удар! Урон по оружию.`);
        this.weapon.takeDamage(damage); 
        return;
    }

    if (this.dodged()) {
        console.log(`> ${this.name} уклоняется от удара!`);
        return;
    }
    
    console.log(`> ${this.name} получает ${damage.toFixed(1)} урона в жизнь.`);
    this.takeDamage(damage); 
};



Player.prototype.tryAttack = function(enemy) {
    const distance = Math.abs(this.position - enemy.position);
    console.log(`\n${this.name} (Pos: ${this.position}) пытается атаковать ${enemy.name} (Pos: ${enemy.position}) на дистанции ${distance.toFixed(1)}.`);

    if (distance > this.weapon.range) {
        console.log(`> ${this.name} не достает до цели. Атака провалена.`);
        return;
    }
    
    const weaponWear = 10 * this.getLuck();
    this.weapon.takeDamage(weaponWear);
    

    let damage = this.getDamage(distance);

    if (distance === 0) {
        console.log(`> ${this.name} бьет вплотную! Урон удвоен, цель отскакивает.`);
        damage *= 2; 
        enemy.takeAttack(damage);
        enemy.moveRight(1); 
    } else {
        enemy.takeAttack(damage);
    }
    
    if (enemy.isDead()) {
        console.log(`>>> ${enemy.name} повержен! <<<`);
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
    console.log(`\n--- Ход игрока: ${this.name} ---`);
    
    const enemy = this.chooseEnemy(players);
    if (!enemy) {
        console.log(`> ${this.name}: Врагов не осталось. Конец игры.`);
        return;
    }

    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
};