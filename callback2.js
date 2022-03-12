function crearUsuario(nombre,edad,callback){
    setTimeout(function(){

        let usuario={
            nombreUsuario:nombre,
            edadUsuario:edad
        }
        callback(usuario)
    },8000)}

    


crearUsuario("juan",22,function(usuario){
    
    if (usuario.edadUsuario >= 18){
        console.log("puede pasar")

    }
    else{
        console.log("no puede pasar")
    }
})