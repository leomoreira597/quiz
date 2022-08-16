import Questao from '../components/Questao'
import QuestaoModel from '../model/questão'
import RespostasModel from '../model/respostas'
import React from 'react'
import Botao from '../components/Botao'

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

  function respostaFornecida(indice: number){
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }

  function tempoEsgotado(){
    if(questao.naoRespondida){
      setQuestao(questaoRef.current.responderCom(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao} respostaFornecida={respostaFornecida}
          tempoEsgotado={tempoEsgotado}/>
      <Botao texto='Próxima Questão ' href='/resultado'/>
    </div>
  )
}
