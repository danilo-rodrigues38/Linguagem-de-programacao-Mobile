// Fazer a tabela verdade dos operadores && (AND), || (OR), ! (NOT), ^ (XOR)
console.log ('***************')
console.log ('* Exercício 9 *')
console.log ('***************')
console.log (' ')
var n1 = 5
var n2 = 6
var n3 = 4
var n4 = 6
var msg = ''
if (n1 > n2 || n3 > n4) {  // As barras paralelas "||" representam a expressão lógica "OU"
    console.log ('A expressão (n1> n2 || n3 >n4)')
    msg = 'Primeiro exemplo é falso'
    console.log (msg)
    console.log (' ')
}
if (n1 < n2 && n3 < n4) {  // Os "&&" e comercial duplo, representam a expressão lógica "E"
    console.log ('A expressão (n1 < n2 && n3 < n4)')
    msg = 'Segundo exemplo é verdadeiro.'
    console.log (msg)
    console.log (' ')   
}
if (n1 < n2 != n3 > n4) {  // A exclamação "!" representa a expressão lógica "NÂO"
    console.log ('A expressão (n1 < n2 != n3 > n4)')
    msg = 'Terceiro exemplo é verdadeiro.'
    console.log (msg)
    console.log (' ')    
}
if (n1 < n2 ^ n3 > n4) {  // O acento circunflexo "^" representa a expressão lógica "XOU ou exclusivo"
    console.log ('A expressão (n1 < n2 ^ n3 > n4)')
    msg = 'Quarto exemplo é 1.'
    console.log (msg)
    console.log (' ')    
}