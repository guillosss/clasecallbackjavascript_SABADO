// declarando la funcion principal
function principal(nombre,callback){
    setTimeout(function(){
        //proceso que hace esta funcion 
        console.log("hola "+nombre)
        //llamo al callback
        callback()
    },4000)

}

//llamar funcion principal

principal("juan",function(){
    console.log("como estas soy el callbak")
})



                                                                                                                                                                       