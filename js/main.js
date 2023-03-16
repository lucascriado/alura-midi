// construindo a função para ser usada 
function playSoundPom(){
    document.querySelector('#som_tecla_pom').play();
}

// construindo a array
const keysList = document.querySelectorAll('.tecla')

// construindo um variavel dinamica para o contador 
let counter = 0 

while(counter < keysList.length){
    keysList[counter].onclick = playSoundPom
    counter++ 
    console.log(counter)
}