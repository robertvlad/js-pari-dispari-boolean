function game() 
{
    let numero_user = document.getElementById('user-num').value;
    let choice_user = document.getElementById('pari-dispari').value;

    let numero_pc = Math.floor(Math.random() * 5) + 1;
    
    console.log(numero_user);
    console.log(choice_user);    
    console.log(numero_pc);

    let somma = parseInt(numero_pc) + parseInt(numero_user);

    console.log(somma);

    let risultato;

    if (somma % 2 === 0 && choice_user === 'pari') {
        return risultato = true;
    }
    else if (somma % 2 === 0 && choice_user === 'dispari') {
        return risultato = false;
    }
    else if (somma % 2 !== 0 && choice_user === 'pari') {
        return risultato = false;
    }
    else if (somma % 2 !== 0 && choice_user === 'dispari') {
        return risultato = true;
    };
};

let btn = document.getElementById('btn-controlla');
let p = document.getElementById('risultato');

btn.addEventListener ('click', function () 
{
    let value_function = game();
    
    console.log(value_function);

    if (value_function){
        p.innerText = 'User: HAI VINTO!';
    }
    else {
        p.innerText = 'User: HAI PERSO!';
    }
});