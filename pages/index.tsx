import Questao from '../components/Questao'
import QuestaoModel from '../model/questão'
import RespostasModel from '../model/respostas'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostasModel.errada('Verde'),
    RespostasModel.errada('Amarelo'),
    RespostasModel.errada('Rosa'),
    RespostasModel.certa('Azul')
  ])
  return (
    <Questao valor={questaoTeste}/>
  )
}
