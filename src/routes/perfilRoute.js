const express = require('express')
const router = express()
const perfilService= require('../service/perfilSrevice')

router.post("", async (req,res)=>{
    try {
        const resultado = await perfilService.criarPerfil(req.body)
        res.json(resultado)
    } catch (error) {
        console.log(error)
    }
})
router.get("/:id", async(req,res)=>{
    try {
        const resultado = await perfilService.buscarPerfil(req.params.id)
        res.json(resultado)
    } catch (error) {
        console.log(error)}
})
router.put("/:id", async (req,res)=>{
    try {
        const resultado = await perfilService.editarPerfil(req.params.id, req.body)
        res.json(resultado)
    } catch (error) {
        console.log(error)        
    }
})
router.delete(":id", async(req,res)=>{
    try {
        const resultado = await perfilService.deletarPerfil(req.paramas.id)
        res.json(resultado)
    } catch (error) {
        console.log(error)   
    }
})
module.exports = router