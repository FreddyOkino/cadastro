const mongoose = require ('mongoose')
const {Schema}= mongoose
const perfilModel = new Schema({
    nome:{
        type:String,
        required:true
    },
    endereco:{
        rua:{type:String,required:true},
        numero:{type:Number, required:true},
        bairro:{type:String,required:true},
        complemento:{type:String},
        cep:{type:Number,required:true},
        estado:{type:String,required:true}
    }
},{
    timestamps:true
})

module.exports = mongoose.model("perfil",perfilModel)