const perfilModel = require('./../models/perfilModel')

module.exports = {
    criarPerfil:  async(perfil)=> {
        try {
            return await perfilModel.create(perfil)
        } catch (error) {
            console.log(error)
        }
    },
   buscarPerfil: async(id)=>{
        try {
            return await perfilModel.findOne({_id:id})
        } catch (error) {
            console.log(error)
        }
    },
    editarPerfil: async(id,perfil)=>{
        try {
            return await perfilModel.updateOne({_id : id}, perfil)
        } catch (error) {
            console.log(error)
        }
    },
    deletarPerfil: async(id)=>{
        try {
            return await perfilModel.deleteOne({_id:id})
        } catch (error) {
            console.log(error)
        }
    },
    buscartodos: async()=>{
        try {
            return await perfilModel.find()
        } catch (error) {
            console.log(error)
        }
    }
}