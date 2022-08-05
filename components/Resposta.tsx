import RespostasModel from "../model/respostas"
import styles from "../styles/Respostas.module.css"

interface RespostaProps{
    valor: RespostasModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: Number) => void
}

export default function Resposta(props: RespostaProps){
    const resposta = props.valor
    return(
        <div className={styles.respostas}
            onClick={() => props.respostaFornecida(props.indice)}>
            <div className={styles.conteudoResposta}>
                <div className={styles.frente}>
                    <div className={styles.letra}
                        style={{ backgroundColor: props.corFundoLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>
                    
                </div>
            </div>
        </div>
    )
}