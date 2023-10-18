// console de entrada
/*
*
*
*/
//   
function LockManager(){
    let login = document.quewrySelector("login").value;
    let senha = document.quewrySelector("senha").value;

    if(login ==="admin" && senha ==="123") {
        location.href="sobre.html";
    } else {
        alert("Login e Senha Incorretos")
    }
}