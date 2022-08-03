export default class RespostasModel {
    private valor: string
    private certa: boolean
    private revelada: boolean

    constructor(
        valor: string,
        certa: boolean,  
        revelada = false
    ){
        this.valor = valor          
        this.certa = certa
        this.revelada = revelada

    }

    get getValor(){
        return this.valor
    }

    get getCerta(){
        return this.certa
    }

    get getRevelada(){
        return this.revelada
    }
}