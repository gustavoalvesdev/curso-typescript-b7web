function resumo(usuario: {nome: string, idade?: number}) {
    if (usuario.idade !== undefined)
        return `Olá, ${usuario.nome}! Tudo bem? Você tem ${usuario.idade} anos.`;
    else 
        return `Olá, ${usuario.nome}! Tudo bem?`;
}

let u = {nome: 'Gustavo', idade: 90};

resumo(u);