import RespostasModel from "./respostas"

export default class QuestaoModel{
    #id: number
    #enunciado: string
    #respostas: RespostasModel[]
    #acertou: boolean

    constructor(
        id: number,
        enunciado: string,
        respostas: RespostasModel[],
        acertou = false
    ){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.getRevelada) return true
        }
        return false
    }
}
    