// type User = {
//     nome: string,
//     idade: number
// };
function resumo(usuario) {
    return "Ol\u00E1, ".concat(usuario.nome, ", voc\u00EA tem ").concat(usuario.idade, " anos");
}
resumo({
    nome: 'Gustavo',
    idade: 34
});
