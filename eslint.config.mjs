// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        }
    },
    rules: {
      'no-console': 'off',
      'quotes': ['error', 'single']
    }
  },
  // Конфигурация для тестовых файлов Jest
  {
      files: ['**/*.test.js'],
      languageOptions: {
          globals: globals.jest // Подключаем глобальные переменные Jest
      },
      rules: {
          'no-undef': 'off', // Отключаем ошибку "не определено" для test/expect/describe
      }
  }
];