class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  isBroken() {
    return this.durability === 0;
  }
}

class Sword extends Weapon {
  constructor() {
    super('Меч', 25, 500, 1);
  }
}

class LongSword extends Weapon {
  constructor() {
    super('Длинный Меч', 35, 750, 1);
  }
}

class Bow extends Weapon {
  constructor() {
    super('Лук', 20, 300, 10);
  }
}

class LongBow extends Weapon {
  constructor() {
    super('Длинный Лук', 28, 450, 15);
  }
}

class Staff extends Weapon {
  constructor() {
    super('Посох', 15, 200, 5);
  }
}

class EnhancedStaff extends Weapon {
  constructor() {
    super('Усиленный Посох', 22, 300, 8);
  }
}

class Player {
  constructor(health, mana, speed, attack, agility, luck) {
    this.health = health;
    this.mana = mana;
    this.speed = speed;
    this.attack = attack;
    this.agility = agility;
    this.luck = luck;
    this.weapon = null;
  }

  equipWeapon(weaponInstance) {
    if (weaponInstance instanceof Weapon) {
      this.weapon = weaponInstance;
      console.log(`${this.constructor.name} экипировал ${weaponInstance.name}.`);
    } else {
      console.error('Это не оружие!');
    }
  }

  dealDamage() {
    if (this.weapon && !this.weapon.isBroken()) {
      const totalDamage = this.attack + this.weapon.attack;
      console.log(`${this.constructor.name} наносит ${totalDamage} урона.`);
      return totalDamage;
    }
    console.log(`${this.constructor.name} не может атаковать (нет оружия или оно сломано).`);
    return 0;
  }
}

class Warrior extends Player {
  constructor() {
    super(120, 10, 8, 30, 15, 10);
  }
}

class Mage extends Player {
  constructor() {
    super(80, 150, 12, 10, 20, 25);
  }
}

class Archer extends Player {
  constructor() {
    super(90, 50, 20, 22, 35, 18);
  }
}

class Dwarf extends Warrior {
  constructor() {
    super();
    this.health += 50;
    this.attack += 10;
  }
}

class Demiurge extends Mage {
  constructor() {
    super();
    this.mana += 100;
    this.luck += 15;
  }
}

class Crossbowman extends Archer {
  constructor() {
    super();
    this.attack += 5;
    this.agility += 10;
  }
}

// --- Примеры использования ---
const basicBow = new Bow();
const vanyaTheWarrior = new Warrior();
vanyaTheWarrior.equipWeapon(basicBow);
vanyaTheWarrior.dealDamage();