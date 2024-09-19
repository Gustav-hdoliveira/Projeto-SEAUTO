import { OcorrenciaTP } from "./SEAUTO_OcorrenciaTP";
import { Rede } from "./SEAUTO_Rede";
export class Fonte{
    id_fonte: number
    nome_fonte: string
    telefone: number
    id_tipo_Ocorrencia: number

    constructor(id: number, nome: string, telefone: number, idTipoOC: number){
        this.id_fonte = id
        this.nome_fonte = nome
        this.telefone = telefone
        this.id_tipo_Ocorrencia = idTipoOC
    }

    setFonte(){
        
    }

    getIDfonte():number{
        return this.id_fonte
    }

    getNomeFonte():string{
        return this.nome_fonte
    }

    getTelefone():number{
        return this.telefone
    }

}
