var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

var accountSelect = document.getElementById("account-select");
var passwordInput = document.getElementById("password-input");
var loginBtn = document.getElementById("login-btn");
var optionsContainer = document.getElementById("options-container");
var checkBalanceBtn = document.getElementById("check-balance-btn");
var depositBtn = document.getElementById("deposit-btn");
var withdrawBtn = document.getElementById("withdraw-btn");
var resultContainer = document.getElementById("result-container");

var selectedAccount = null;

accountSelect.addEventListener("change", function () {
    selectedAccount = parseInt(accountSelect.value);
});

loginBtn.addEventListener("click", function () {
    if (selectedAccount !== null) {
        var password = passwordInput.value;
        if (password === "1234") {
            optionsContainer.style.display = "block";
            passwordInput.value = "";
            resultContainer.innerHTML = "";
        } else {
            resultContainer.innerHTML = "Contraseña incorrecta. Intenta de nuevo.";
        }
    }
});

checkBalanceBtn.addEventListener("click", function () {
    var saldo = cuentas[selectedAccount].saldo;
    resultContainer.innerHTML = "Saldo actual: $" + saldo;
});

depositBtn.addEventListener("click", function () {
    var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));
    if (!isNaN(monto) && monto > 0) {
        cuentas[selectedAccount].saldo += monto;
        resultContainer.innerHTML = "Monto ingresado: $" + monto + "<br>Nuevo saldo: $" + cuentas[selectedAccount].saldo;
    } else {
        resultContainer.innerHTML = "Monto inválido.";
    }
});

withdrawBtn.addEventListener("click", function () {
    var monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (!isNaN(monto) && monto > 0) {
        if (cuentas[selectedAccount].saldo >= monto && cuentas[selectedAccount].saldo - monto >= 10) {
            cuentas[selectedAccount].saldo -= monto;
            resultContainer.innerHTML = "Monto retirado: $" + monto + "<br>Nuevo saldo: $" + cuentas[selectedAccount].saldo;
        } else {
            resultContainer.innerHTML = "Saldo insuficiente o monto inválido.";
        }
    } else {
        resultContainer.innerHTML = "Monto inválido.";
    }
});
