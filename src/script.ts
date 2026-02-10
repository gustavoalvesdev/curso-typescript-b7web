// type User = {
//     nome: string,
//     idade: number
// };

interface User {
    nome: string
}

// Interface aceita adição de novos campos, type não
interface User {
    idade: number
}

function resumo(usuario: User) {
    return `Olá, ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Gustavo',
    idade: 34
});