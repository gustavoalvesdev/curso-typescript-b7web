var _a;
var idade = 90;
idade = (_a = document.getElementById('idade')) === null || _a === void 0 ? void 0 : _a.innerHTML;
function mostrarIdade(idade) {
    if (idade === 'string')
        console.log(idade.toUpperCase());
    else if (idade === 'number')
        console.log(idade);
    else
        console.log('não definido');
}
mostrarIdade(90);
mostrarIdade('2222');
