import { Usuario } from "./SEAUTO_Usuario"
import { Fonte } from "./SEAUTO_OrigemServiço"
export class Ocorrencia{
    CPF_ocorrencia: string
    relator: string
    endereço: string
    telefoneRelator: string
    FontedeSocorro: string
    FontedeSocorroId: number
    id_tipoOcorrencia: number
    tipoOcorrencia: string
    
    constructor(CPF: string, nome: string, endereço: string, telefone: string, fonteSoccorro: string, fonteSOSID: number, idTPOC: number, TPOC: string){
        this.CPF_ocorrencia = CPF
        this.relator = nome
        this.endereço = endereço
        this.telefoneRelator = telefone
        this.FontedeSocorro = fonteSoccorro
        this.FontedeSocorroId = fonteSOSID
        this.id_tipoOcorrencia = idTPOC
        this.tipoOcorrencia = TPOC
    }

    setOcorrencia(CPF: string, nome: string, endereço: string, telefone: string, fonteSoccorro: string, fonteSOSID: number, idTPOC: number, TPOC: string){
        this.CPF_ocorrencia = CPF
        this.relator = nome
        this.endereço = endereço
        this.telefoneRelator = telefone
        this.FontedeSocorro = fonteSoccorro
        this.FontedeSocorroId = fonteSOSID
        this.id_tipoOcorrencia = idTPOC
        this.tipoOcorrencia = TPOC
    }

    getOcorrencia(): string{
        return(`
            CPF relator: ${this.CPF_ocorrencia}
            Nome relator: ${this.relator}
            endereço da ocorrencia: ${this.endereço}
            telefone do relator: ${this.telefoneRelator}
            fonte de socorro: ${this.FontedeSocorro}, id: ${this.FontedeSocorroId}
            Tipo de ocorrencia: ${this.tipoOcorrencia}, ID: ${this.id_tipoOcorrencia}`)
    }
}