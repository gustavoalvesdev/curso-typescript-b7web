function resumo(usuario: {nome: string, idade: number}) {
    return `Olá, ${usuario.nome}! Tudo bem? Você tem ${usuario.idade} anos.`;
}

let u = {nome: 'Gustavo', idade: 32, outro: 'abc'};

resumo(u);