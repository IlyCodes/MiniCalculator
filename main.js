function calc(op) {
    // recupere la valeur de input de nombre 1
    let nb1 = document.getElementById('nb1').value;

    // recupere la valeur de input de nombre 2
    let nb2 = document.getElementById('nb2').value;

    // recupere l'element de Result
    let result = document.getElementById('result');


    // resoudre le probleme de power (si ona la 1er nombre negative on ajoute les parentheses dans le nombre)
    if (op == "**") {
        nb1 = "(" + nb1 + ")";
    }

    // code de la table de multipication 
    if (op == 'TM') {
        result.innerHTML = "Result : <br/>"
        for (let i = 1; i <= nb2; i++) {
            result.innerHTML += nb1 + ' x ' + i + ' = ' + nb1 * i + '<br/>'
        }
    } else {
        // recupere l'expresion de la forme de calcule chaine de character simple 
        var expretion = nb1 + op + nb2;

        // metter la valeur finale dans l'element result 
        // avec la fonction eval (qui permet de calculer un forma mathimatique comme chane de caracter)
        result.innerHTML = 'Result = ' + eval(expretion)
    }

}