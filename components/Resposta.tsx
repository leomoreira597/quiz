import RespostasModel from "../model/respostas"
import styles from "../styles/Respostas.module.css"

interface RespostaProps {
    valor: RespostasModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: Number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor
    return (
        <div className={styles.respostas}
            onClick={() => props.respostaFornecida(props.indice)}>
            <div className={styles.conteudoResposta}>
                {!resposta.revelada ? (
                    <div className={styles.frente}>
                        <div className={styles.letra}
                            style={{ backgroundColor: props.corFundoLetra }}>
                            {props.letra}
                        </div>
                        <div className={styles.valor}>
                            {resposta.valor}
                        </div>
                    </div>
                ) : (
                    <div className={styles.verso}>
                        {resposta.certa ? (
                            <div className={styles.certa}>
                                <div>A resposta certa é...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        ) : (
                            <div className={styles.errada}>
                                <div>A resposta informada está errada...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}