let leitor = require("readline-sync")
import { rede } from "./SEAUTO_Main"
export class Fonte{
    id_fonte: number
    nome_fonte: string
    telefone: string
    id_tipo_Ocorrencia: number

    constructor(id: number, nome: string, telefone: string, idTipoOC: number){
        this.id_fonte = id
        this.nome_fonte = nome
        this.telefone = telefone
        this.id_tipo_Ocorrencia = idTipoOC
    }

    setFonte(){
        let nomefomte = leitor.question("Qual no nome da fonte de socorro? ")
        let telefone = leitor.question("Qual o Telefone? ")
        let OCOrrTP= leitor.question('qual o tipo de socorro? 1: "Socorro policial". 2: "Socorro Médico", 3: "Socorro de risco a vida", 4: "Proteção particular"')
        let id_fonteUP = rede.fontes.length + 1
        this.nome_fonte = nomefomte
        this.telefone = telefone
        this.id_tipo_Ocorrencia
        rede.fontes.push(new Fonte(id_fonteUP, nomefomte, telefone, OCOrrTP))
    }

    getIDfonte():number{
        return this.id_fonte
    }

    getNomeFonte():string{
        return this.nome_fonte
    }

    getTelefone():string{
        return this.telefone
    }

}
