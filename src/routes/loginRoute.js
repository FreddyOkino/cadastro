const express= require('express')
const router = express()
const loginService = require('./../service/loginService')

router.post("", async(req,res)=>{
    try {
        const resultado = await loginService.criarLogin(req.body)
        res.json(resultado)
    } catch (error) {
        console.log(error)
    }
})
router.get("", async(req,res)=>{
    try {
        const resultado = await loginService.buscarLogin(req.body)
        res.json(resultado)
    } catch (error) {
        
    }
})

module.exports = router