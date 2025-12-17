// src/js/index.js - Ваш главный файл приложения

// Импортируем стили
import '../css/style.css'; 

// Импортируем функцию play из файла game.js, который находится рядом
import { play } from './game.js';

console.log('Webpack Entry Point: Запуск приложения.');

// Вызываем функцию начала игры
play();