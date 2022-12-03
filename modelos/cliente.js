module.exports = class Cliente {
    constructor(){
        this.id = 0
        this.nome = ""
    }

  static async lista(){
    let clientes = []
    const fs = require('fs');
 
    try {
       const jsonClientes =  await fs.readFileSync('bd/clientes.json', 'utf8');
       
       clientes = JSON.parse(jsonClientes)
    } catch (err) {
        console.error(err);
    }
    
        return clientes
    }
}