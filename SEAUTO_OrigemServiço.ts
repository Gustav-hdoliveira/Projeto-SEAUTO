import { OcorrenciaTP } from "./SEAUTO_OcorrenciaTP";
export class Fonte{
    id_fonte: number
    nome_fonte: string
    telefone: number
    id_tipo_Ocorrencia: OcorrenciaTP

    constructor(id: number, nome: string, telefone: number, idTipoOC: OcorrenciaTP){
        this.id_fonte = id
        this.nome_fonte = nome
        this.telefone = telefone
        this.id_tipo_Ocorrencia = idTipoOC
    }

    setFonte()
}
