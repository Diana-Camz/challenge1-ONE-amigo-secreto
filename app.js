let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


const agregarAmigo = () => {
    let amigo = document.getElementById('amigo').value;
   if(amigo == "") {
    alert("Por favor, inserta un nombre!!");
   } else {
    amigos.push(amigo);
    lista.innerHTML = "";
    mostrarLista();
    document.getElementById('amigo').value = "";
 }
}

const mostrarLista = () => {
    for(let i = 0; i < amigos.length; i++){
        let nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = amigos[i];
        lista.appendChild(nuevoItem);
    }
}


const sortearAmigo = () => {
    let amigoSecreto = document.createElement('li');
    if(amigos.length == 0){
        alert('Aun no has agregado ningun Amigo!!');
    } else {
        let numRandom = Math.floor(Math.random() * amigos.length) 
            amigoSecreto.innerHTML = ` El amigo secreto es ${amigos[numRandom]}!!`;
            resultado.appendChild(amigoSecreto);

    }

}
