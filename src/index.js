require('dotenv').config()
const app = require('./server')

app.get('/',(req,res)=>{
    res.send("App de cadastro")
})
app.listen(3000,()=>{
    console.log("Rodando na porta 3000")
})