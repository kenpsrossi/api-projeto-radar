module.exports = class Cliente {
    constructor(cliente){
        this.id =cliente?.id
        this.nome = cliente?.nome
        this.telefone = cliente?.telefone
        this.email = cliente?.email
        this.cpf = cliente?.cpf
        this.cep = cliente?.cep
        this.logradouro = cliente?.logradouro
        this.complemento = cliente?.complemento
        this.bairro = cliente?.bairro
        this.cidade = cliente?.cidade
        this.estado = cliente?.estado      
    }

   // staticos
   static async apagarPorId(id){
    const listaClientes = await this.lista()
    const listaNova = []

    listaClientes.forEach(cliente => {
        if (cliente.id.toString() != id.toString()) {
            listaNova.push(cliente)
        }
    });

   Cliente.salvarJsonDisco(listaNova)
}

static async buscaPorId(id){
    const listaClientes = await this.lista()
    for(let i=0; i<listaClientes.lenght; i++){
        const clienteBd = listaClientes[i]
        if(clientBd.id.toString() === id.toString()){
            return clienteBd
     }
   }
   return null
}

   static async salvar(cliente){
      const listaClientes = await this.lista()
      let exist = false
      for(let i=0; i<listaClientes.lenght; i++){
           const clienteBd = listaClientes[i]
           if(clientBd.id.toString() === cliente.id.toString()){
                clienteBd.nome = cliente.nome
                clienteBd.telefone = cliente.telefone
                clienteBd.email = cliente.email
                clienteBd.cpf = cliente.cpf
                clienteBd.cep = cliente.cep
                clienteBd.logradouro = cliente.logradouro
                clienteBd.complemento = cliente.complemento
                clienteBd.bairro = cliente.bairro
                clienteBd.cidade = cliente.cidade
                clienteBd.estado = cliente.estado
                exist = true  
                break
        }
    }
    if (!exist){
        const objectLiteral = {...cliente}
        listaClientes.push(objectLiteral)
    }
    Cliente.salvarJsonDisco(listaClientes)
 }


 static async salvarJsonDisco(clientes){
    const fs = require('fs');
 
    try {
        fs.writeFileSync('bd/clientes.json', JSON.stringify(clientes),{encoding:'utf8'});
    } catch (err) {
        console.error(err);
    }
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


