const loginModel = require('./../models/loginModel')

module.exports={
    criarLogin: async(dados)=>{
        try {
            return await loginModel.create(dados)
        } catch (error) {
            console.log(error)
        }
    },
    buscarLogin: async(login)=>{
        try {
            if(login.usuario){
                let contaEncontrado= await loginModel.findOne({"usuario":login.usuario}).select("+senha").exec()
                console.log(contaEncontrado)
               if(contaEncontrado.senha==login.senha){
                   return {
                       nome: contaEncontrado.usuario
                   }

               }else{
                throw{
                    message:"senha errada",
                    status:404
                } 
               }
            }
           
        } catch (error) {
            console.log(error)
        }
    }
}