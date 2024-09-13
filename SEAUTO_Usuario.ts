let leitor = require("readline-sync")

class Usuario{
    CPF: number
    nome: string
    telefone: string
    endereco: string
    idade: number
    condicoes_especiais: string
    senha_gov: string

    constructor(CPF: number, nome: string, telefone: string, endereco: string, idade: number, condicoes: string, senha: string){
        this.CPF = CPF
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.idade = idade
        this.condicoes_especiais = condicoes
        this.senha_gov = senha
    }

    setUsuario(): void{
        let CPFUP = leitor.question("Insira seu CPF: ")
        let nome = leitor.question("Nome completo: ")
        let telefone = leitor.question("Telefone: ")
        let endereco = leitor.question("Endereco de moradia atual: ")
        console.log("Para um ascesso mais rápido caso a emergencia seja em sua residencia")
        let idade = leitor.question("Sua idade: ")
        console.log("Você possui condições e nescessidades especias que deverão ser levadas em concideração? se sim, por favor ensira os dados aqui")
        let condespec = leitor.question("Ensira:")
        this.CPF = CPFUP
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.idade =idade
        this.condicoes_especiais = condespec
    }
    
    getUsuario(): string{
        return `Nome completo: ${this.nome}
        CPF: ${this.CPF}
        Idade: ${this.idade}
        telefone cadastrado: ${this.telefone}
        Endereço cadastrado: ${this.endereco}
        Nescessidades especiais: ${this.condicoes_especiais} `
    }

    
}
