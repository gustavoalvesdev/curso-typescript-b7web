let idade: number | string | undefined = 90;

idade = document.getElementById('idade')?.innerHTML;

function mostrarIdade(idade: number | string) {
    if (idade === 'string')
        console.log(idade.toUpperCase());
    else if (idade === 'number')
        console.log(idade);
    else 
        console.log('não definido');
}

mostrarIdade(90);
mostrarIdade('2222');