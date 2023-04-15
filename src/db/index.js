const mongoose= require('mongoose')
require('dotenv').config()

const URI= process.env.url
let db

module.exports={
    connect: async () => {
        db= await mongoose.connect(URI)
        console.log("Conexão com o banco de dados estabelecida com sucesso")
    },
    getDB: ()=>{
        return db
    }
}