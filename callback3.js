//
function recibirPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback){
    setTimeout(function(){
        let planos =[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        let planosfiltrados=planos.filter(function(plano){
            return(plano>=1 && plano <=10)

        })
        callback(planosfiltrados)
    },5000)
    
    
}

recibirPlanos(10,20,58,6,1547,454,54,1,5,85,function(planosfiltrados){
    if (planosfiltrados.length >0){
        console.log("Puedes irte, hay " + planosfiltrados.length+ "planos")
    }
    else{
        console.log("devuelvete")

    }
})