const fondo = document.getElementById('fondo')
let quitarColores = [
    fondo.classList.remove('rojo'),
    fondo.classList.remove('azul'),
    fondo.classList.remove('amarillo'),
    fondo.classList.remove('verde'),
    fondo.classList.remove('naranja') 
] 

quitarColores[1]

function hacerAlgo(numero,callback){
if(isNaN(numero)){
console.log('Por favor ingrese un numero')
return
}

callback(numero)
}



function multiplicar(numero){
    let tiempo = function(){
        console.log(`Multiplicación del 1 al 10 del numero ${numero}`)
        let intervarlo = setInterval(myTimer,1000)
        let aumentador = 1
        function myTimer(){
            let multiplicar = (aumentador * numero)
            console.log(`${numero} multiplicado por ${aumentador} es = ${multiplicar}`)
            aumentador++
            if(aumentador === 11){
                clearInterval(intervarlo)
                console.log('Multiplicaciones terminadas')
                
            }
        }

    }
    setTimeout(tiempo,1000)
}
 
function parOImpart(numero){
    if(numero%2 === 0){
        console.log(`El numero ${numero} es par`)
    }else{
        console.log(`el numero ${numero} es impar`)
    }
}


function cambiarFondo(numero){
    console.log(`Se cambiara el color del fondo ${numero} veces`)
    let cambiarColor = 0
    let numerofinal = 0
    let colores = setInterval(discoteca,1000)
    function discoteca(){
        cambiarColor++ 
        if(cambiarColor === 1){
            fondo.classList.add('rojo')
        }
        if(cambiarColor === 2){
            fondo.classList.remove('rojo'),
            fondo.classList.add('azul')
        }
        if(cambiarColor === 3){
            fondo.classList.remove('azul'),
            fondo.classList.add('amarillo')
        }
        if(cambiarColor === 4){
            fondo.classList.remove('amarillo')
            fondo.classList.add('verde')
        }
        if(cambiarColor === 5){
            fondo.classList.remove('verde'),
            fondo.classList.add('naranja')
        }
        if(cambiarColor === 6){
            cambiarColor = 0
            fondo.classList.remove('naranja')
        }
        console.log(cambiarColor)
        numerofinal++
        if(numerofinal === numero){
            clearInterval(colores)
            console.log('termine')
            
        }
    }
}


