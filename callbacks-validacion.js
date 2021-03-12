function ejercicio(foo,callback){
    if(isNaN(foo)){
    console.log('el parametro ingresado no es un numero')
    return
    } //validacion
    
    
    
    console.log('tablas')
    console.log('par o impar')
    
    callback(foo)
    
    }
    
    //Cuenta Regresiva
    function conteo(num){
    for(let i = 0; i < num; i++){
    console.log('conteo regresivo',num - i)
    }
    }
    
    //Cuenta con mensaje
    
    
    
    ejercicio('hola', conteo)
    ejercicio('hola', (res)=>conteo(res))
    ejercicio('hola', changeBackground)
