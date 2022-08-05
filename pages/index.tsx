import Questao from '../components/Questao'
import QuestaoModel from '../model/questão'
import RespostasModel from '../model/respostas'
import React from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostasModel.errada('Verde'),
  RespostasModel.errada('Amarelo'),
  RespostasModel.errada('Rosa'),
  RespostasModel.certa('Azul')
])

export default function Home() {

  const [questao, setQuestao] = React.useState(questaoMock)

  function respostaFornecida(indice: number){
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao} respostaFornecida={respostaFornecida}/>
    </div>
  )
}
