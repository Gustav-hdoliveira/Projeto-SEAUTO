export class OcorrenciaTP {
    id_SVTP: number
    nome_ocorrencia: string
    
    constructor(id: number, nome: string){
        this.id_SVTP = id
        this.nome_ocorrencia = nome
    }
    
    getIDSVTP():number{
        return this.id_SVTP
    }
    getNomeSVTP():string{
        return this.nome_ocorrencia
    }
}
