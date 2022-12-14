const Cliente = require("../modelos/cliente");

module.exports = {
    index: async (req, res, next) => {
        const clientes = await  Cliente.lista() 
        res.status(200).send( clientes)
    },
    create:  (req, res, next) => {
         const cliente = new Cliente(req.body)
         cliente.id = new Date().getTime()
         Cliente.salvar(cliente)
         res.status(201).send(cliente)
    },
    delete:  (req, res, next) => {
        Cliente.apagarPorId(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let clienteBd = await Cliente.buscaPorId(req.params.id)
        if(!clienteBd) return res.status(404).send({mensagem:"Cliente não encontrado"})

        const cliente = new Cliente(req.body)
        cliente.id = clienteBd.id
        Cliente.salvar(cliente)
        res.status(200).send(clienteBd)
    },
    show: async (req, res, next) => {
        let clienteBd = await Cliente.buscaPorId(req.params.id)
        if(!clienteBd) return res.status(404).send({mensagem:"Cliente nãõ encontrado"})
        res.status(200).send(clienteBd)
    }

};