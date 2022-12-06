module.exports = {
    index: (req, res, next) => {
        res.status(200).send( { mensage: "Bem vindo a minha API Professor"} )
    }
};