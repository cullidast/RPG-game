import js from "@eslint/js";
import airbnbBase from 'eslint-config-airbnb-base';
import globals from "globals";

export default [
  js.configs.recommended,
  airbnbBase,
  {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        }
    },
    rules: {
      // Пример правила: Airbnb запрещает console.log, мы разрешаем для задания
      "no-console": "off",
      // Пример правила: Airbnb использует одинарные кавычки по умолчанию, мы приводим к ним весь код
      "quotes": ["error", "single"]
    }
  }
];