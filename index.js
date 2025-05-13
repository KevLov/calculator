let x = 3;
let y = 5;

let oper;

switch (oper){

    case sum:
        let resu = sum(x,y);
        alert(resu);
    break;

}

function sum(x,y){
    return x+y;
}