import { CountdownCircleTimer } from "../node_modules/react-countdown-circle-timer/lib/index";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#004777' ,  '#F7B801' ,  '#A30000' ,  '#A30000']}
                colorsTime={[10,3,0]}
            >

                {({ remainingTime }) => remainingTime }

            </CountdownCircleTimer>
        </div>
    );
}