import { Rede } from "./SEAUTO_Rede";
import { Usuario } from "./SEAUTO_Usuario";
import { Fonte } from "./SEAUTO_OrigemServiço";
import { OcorrenciaTP } from "./SEAUTO_OcorrenciaTP";

let leitor = require("readline-sync")
export let rede = new Rede([],[],[])
function InserçãoInicial() {
    rede.OcorrenciaTipo.push(new OcorrenciaTP (1, "Socorro policial"))
    rede.OcorrenciaTipo.push(new OcorrenciaTP(2, "Socorro médico"))
    rede.OcorrenciaTipo.push(new OcorrenciaTP(3, "Socorro ao risco"))
    rede.OcorrenciaTipo.push(new OcorrenciaTP(4, "Proteção particular"))
    rede.fontes.push(new Fonte(1, "Policia", '190', 1))
    rede.fontes.push(new Fonte(2, "Samu", '192', 2))
    rede.fontes.push(new Fonte(3, "Bombeiros", '193', 3))
}
InserçãoInicial()
function Main() {
    let repetidor = true
    while (repetidor) {
        let opçãoEscolhida = menuInicial()
        switch (opçãoEscolhida) {
            case '1':
                
                break;
            case '2':
            
                break
            case '3':

                break
            case '4':

                break
            case '0':

            default:
                break;
        }
    }
}

function menuInicial(): string{
    console.log(`
        --------------------------------------
        |                            0 = Sair|
        |   ___   ___      ___  ___ ___ ____ |
        |  |___| |   | |    |  |     |  |  | |
        |  |     |   | |    |  |     |  |--| | Pressione 1
        |  |     |___| |__ _|_ |___ _|_ |  | |
        |                                    |
        |      ____   ____   __              |
        |     |      |    | |  |  /| |    |  |
        |     |____  |----| |  | / | |    |  | Pressione 2
        |          | |    | |  |/  | |    |  |
        |      ____| |    | |      | |____|  |
        |                                    |
        |                                    |
        | _____   ____   _______   ___   ___ |
        | |    | |    | |   |   | |   | |    |
        | |    | |    | |   |   | |___| |___ | iros  Pressione 3
        | |    | |    | |   |   | |   | |    |
        | |____| |____| |   |   | |___| |___ |
        |                                    |
        |     Cadastrar/Login: Pressione 4   |
        --------------------------------------`)
    let opçãoEscolhida = leitor.question("Pressione: ")
    return opçãoEscolhida
}

function verificarLogin()
function OcorrenciaDeslogada(){

}

menuInicial()