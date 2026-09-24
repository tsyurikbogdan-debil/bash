function runAuthScript() {
    const userField = document.getElementById('input-username').value;
    const passField = document.getElementById('input-password').value;
    const resultElement = document.getElementById('auth-result');

    const CORRECT_USER = "admin";
    const CORRECT_PASS = "secret123";

    if (userField === CORRECT_USER && passField === CORRECT_PASS) {
        resultElement.style.color = "#4ade80"; // Зелений колір успіху
        resultElement.innerHTML = `[SUCCESS] Успішна авторизація! Ласкаво просимо, <b>${userField}</b>.`;
    } else {
        resultElement.style.color = "#f87171"; // Червоний колір помилки
        resultElement.innerHTML = `[ERROR] Помилка: Невірний логін або пароль.`;
    }
}
