function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}

let nome: string = firstLetterUpperCase('gustavo');

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

let algo = somar(10, 20);