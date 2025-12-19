import { Archer } from './characters/Archer.js';
import { Warrior } from './characters/Warrior.js';
import { Mage } from './characters/Mage.js';
import { Dwarf } from './characters/Dwarf.js';
import { Crossbowman } from './characters/Crossbowman.js';
import { Demiurge } from './characters/Demiurge.js';

import { logToHtml } from './utils.js';

export function play() {
    logToHtml('--- БИТВА НАЧИНАЕТСЯ ---');

    // 1. Создание участников с начальными позициями и именами
    const players = [
        new Warrior(0, 'Алёша'),
        new Archer(10, 'Леголас'),
        new Mage(5, 'Гендальф'),
        new Dwarf(2, 'Гимли'),
        new Crossbowman(15, 'Вася'),
        new Demiurge(8, 'Творец')
    ];

    let round = 1;

    // 2. Основной цикл игры: пока живых игроков больше одного
    while (players.filter(p => !p.isDead()).length > 1) {
        logToHtml(`\n=== РАУНД ${round} ===`);
        
        // Перемешиваем игроков перед каждым раундом для случайной очередности хода
        players.sort(() => Math.random() - 0.5);

        for (const player of players) {
            // Если игрок умер во время этого раунда, он не ходит
            if (player.isDead()) continue;

            // Вызываем метод turn, который реализует ИИ игрока
            player.turn(players);
        }

        round++;
        
        // Предохранитель, чтобы цикл не стал бесконечным
        if (round > 100) {
            logToHtml('Превышено максимальное количество раундов (100). Остановка игры.');
            break; 
        }
    }

    // 3. Определение победителя
    const winner = players.find(p => !p.isDead());
    
    if (winner) {
        logToHtml(`\n🏆 ПОБЕДИТЕЛЬ: ${winner.name} (${winner.description}) 🏆`);
    } else {
        logToHtml('\nНикто не выжил в этой битве.');
    }
}