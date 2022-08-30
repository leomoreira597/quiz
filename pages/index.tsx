import Questao from '../components/Questao'
import QuestaoModel from '../model/questão'
import RespostasModel from '../model/respostas'
import React from 'react'
import Botao from '../components/Botao'
import styles from '../styles/Botao.module.css'
import Questionario from '../components/Questionario'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostasModel.errada('Verde'),
  RespostasModel.errada('Amarelo'),
  RespostasModel.errada('Rosa'),
  RespostasModel.certa('Azul')
])

export default function Home() {

  const [questao, setQuestao] = React.useState(questaoMock)
  const questaoRef = React.useRef<QuestaoModel>()

  React.useEffect(() => {
    questaoRef.current = questao
  }, [questao])

  function questaoRespondida(){

  }

  function proximoPasso(){

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionario
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={proximoPasso}
      />
    </div>
  )
}
