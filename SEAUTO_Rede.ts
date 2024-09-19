import { Usuario } from "./SEAUTO_Usuario";
import { Fonte } from "./SEAUTO_OrigemServiço"
import { OcorrenciaTP } from "./SEAUTO_OcorrenciaTP";
export class Rede {
    usuarios: Usuario[]
    fontes: Fonte[]
    OcorrenciaTipo: OcorrenciaTP[]
    constructor(user: [], fonte: [], ocTP) {
        this.usuarios = user
        this.fontes = fonte
        this.OcorrenciaTipo = ocTP
    }

    getUsuarios(): Array<Usuario>{
        return this.usuarios
    }

    addUsuario(usuario: Usuario):void{
        this.usuarios.push(usuario)
    }

    novoIDfonte(){
        return this.usuarios.length + 1
    }

    getFonte(){
        return this.fontes
    }

    public login(CPFusuario: string, senha: string): Usuario | null{
        let contaLogada: Usuario | null = null
        for(let usuario of this.usuarios){
            if(usuario.getCPF() === CPFusuario && usuario.getSenha() === senha){
                contaLogada = usuario
            }
        }
        return contaLogada
    }

    public getUsuarioByCPF(CPFusuario: string): Usuario {
        for (let usuario of this.usuarios) {
            if (usuario.getCPF() === CPFusuario) {
                return usuario
            }
        }
        throw new Error("Conta não encontrada")
    }

    public getFonteByNome(nomeFonte: string): Fonte{
        for (let fonte of this.fontes) {
            if(fonte.getNomeFonte() === nomeFonte){
                return fonte
            }
        }
        throw new Error("Fonte não encontrada")
    }

    public getTipoById(idTP: number): OcorrenciaTP{
        for (let Ocorr of this.OcorrenciaTipo) {
            if(Ocorr.getIDSVTP() === idTP){
                return Ocorr
            }
        }
        throw new Error("Tipo não encontrado")
    }
}
