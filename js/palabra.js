//Lo que vamos a hacer en esta página son las verificaciones para que no haya ningún error al momento de cargar la palabra
//Después vamos a utilizar esta variable para el AddEventListener 
var botonguardarpalabra = document.querySelector("#Btnsave");
var masdeocho = document.querySelector("#masdeocho");
var textoconnumeros = document.querySelector("#textoconnumeros");
var menosdeuno = document.querySelector("#menosdeuno");
var acentos = document.querySelector("#noacentos");
//Obtenemos la palabra mediante esta variable
var newword = document.querySelector("#ingresarpalabra");
newword.focus();

let numeros=["0","1","2","3","4","5","6","7","8","9"];
let noacentos=["á","é","í","ó","ú"];

//Con este "click" lo que hacemos es que al momento de hacer "click", verifique todo
botonguardarpalabra.addEventListener("click",function(){

    var errores = true;
    var palabra = newword.value;

//Lo que hacemos con las classList es añadir o remover una clase (en este caso los ids para que aparezca o desaparezca la advertencia)
if(palabra.length > 8){
    masdeocho.classList.remove("invisible");
    errores = false;
}
else{
    masdeocho.classList.add("invisible");
}

if(palabra.length <= 0){
    menosdeuno.classList.remove("invisible");
    masdeocho.classList.add("invisible");
    textoconnumeros.classList.add("invisible");
    errores = false;
}
else{
    menosdeuno.classList.add("invisible");
}



    //Lo que hacemos con estos for es recorrer la matriz 
    for(let i = 0; i < palabra.length;i++){

        for(let j = 0; j < numeros.length;j++){
            if(palabra[i].includes(numeros[j])){
                textoconnumeros.classList.remove("invisible");
                errores = false;
                break;
            }
            else{
                textoconnumeros.classList.add("invisible");
            }
        }
    }

    //Lo que hacemos con estos for es recorrer la matriz 
    for(let i = 0; i < palabra.length;i++){

        for(let j = 0; j < noacentos.length;j++){
            if(palabra[i].includes(noacentos[j])){
                acentos.classList.remove("invisible");
                errores = false;
                break;
            }
        }
    }
    if(errores){
        guardarlocalstg(palabra.toUpperCase());
        window.location.href = "./juego.html";
    }    
})

//Lo que hacemos con guardarLocalStorage es 
//justamente guardar la palabra nueva

function guardarlocalstg(contenido){
    sessionStorage.setItem("palabra",contenido);
}