export function logToHtml(message) {
    const logElement = document.getElementById('game-log');
    if (logElement) {
        // Создаем текстовый узел для добавления сообщения
        const textNode = document.createTextNode(message + '\n'); 
        logElement.appendChild(textNode);
        // Автоматически прокручиваем вниз
        logElement.scrollTop = logElement.scrollHeight;
    }
    // Также оставляем console.log для отладки
    console.log(message); 
}