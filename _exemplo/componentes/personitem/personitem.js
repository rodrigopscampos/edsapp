let itens = document.getElementsByClassName("personitem")
// console.log(itens[0]);

for (let index = 0; index < itens.length; index++) {
    itens[index].addEventListener('click', iniciarMensagem)
}

function iniciarMensagem() {
    if(screen.width < 992){
        document.getElementById("rightcol").style.left = 0
    }
    
}