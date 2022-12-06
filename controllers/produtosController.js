const Produto = require("../modelos/produto");

module.exports = {
    index: async (req, res, next) => {
        const produtos = await  Produto.lista() 
        res.status(200).send( produtos)
    },
    create:  (req, res, next) => {
         console.log("--1")
         console.log(req.body)
         const produto = new Produto(req.body)
         console.log("--2")
         produto.id = new Date().getTime()
         console.log("--3")
         Produto.salvar(produto)
         console.log("--4")
         res.status(201).send(produto)
    },
    delete:  (req, res, next) => {
        console.log("-- me delete depois 1")
        Produto.apagarPorId(req.params.id)
        console.log("-- me delete depois 2")
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let produtoBd = await Produto.buscaPorId(req.params.id)
        if(!produtoBd) return res.status(404).send({mensagem:"Produto não encontrado"})

        const produto = new Produto(req.body)
        produto.id = produtoBd.id
        Produto.salvar(produto)
        res.status(200).send(produtoBd)
    },
    show: async (req, res, next) => {
        let produtoBd = await Produto.buscaPorId(req.params.id)
        if(!produtoBd) return res.status(404).send({mensagem:"Produto nãõ encontrado"})
        res.status(200).send(produtoBd)
    }

};