module.exports = class Produto {
    constructor(produto) {
        this.id = produto?.id
        this.nome = produto?.nome
        this.descricao = produto?.descricao
        this.valor = produto?.valor
        this.qtd_estoque = produto?.qtd_estoque
    }


    // staticos
    static async apagarPorId(id) {
        const listaProdutos = await this.lista()
        const listaNova = []

        listaProdutos.forEach(function (produto) {
            if (produto.id.toString() != id.toString()) {
                listaNova.push(produto)
            }
        })

        Produto.salvarJsonDisco(listaNova)
    }

    static async buscaPorId(id) {
        const listaProdutos = await this.lista()
        for (let i = 0; i < listaProdutos.lenght; i++) {
            const produtoBd = listaProdutos[i]
            if (produtoBd.id.toString() === id.toString()) {
                return produtoBd
            }
        }
        return null
    }

    static async salvar(produto) {
        const listaProdutos = await this.lista()
        let exist = false
        for (let i = 0; i < listaProdutos.lenght; i++) {
            const produtoBd = listaProdutos[i]
            if (produtoBd.id.toString() === produto.id.toString()) {
                produtoBd.nome = produto.nome
                produtoBd.descricao = produto.descricao
                produtoBd.valor = produto.valor
                produtoBd.qtd_estoque = produto.qtd_estoque
                exist = true
                break
            }
        }
        if (!exist) {
            const objectLiteral = { ...produto }
            listaProdutos.push(objectLiteral)
        }
        Produto.salvarJsonDisco(listaProdutos)
    }


    static async salvarJsonDisco(produtos) {
        const fs = require('fs');

        try {
            fs.writeFileSync('bd/produtos.json', JSON.stringify(produtos), { encoding: 'utf8' });
        } catch (err) {
            console.error(err);
        }
    }


    static async lista() {
        let produtos = []
        const fs = require('fs');

        try {
            const jsonProdutos = await fs.readFileSync('bd/produtos.json', 'utf8');

            produtos = JSON.parse(jsonProdutos)
        } catch (err) {
            console.error(err);
        }

        return produtos
    }
}
