// Usar as chaves quando o elemento é um entre muitos disponíveis
import { useState } from "react"

// Não usar as chaves quando a exportação é do tipo "default"
import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTask"

import './index.css';


function App() {

  const [tarefas, usarTarefas] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer exercícios físicos",
      description: "Praticar exercícios físicos 3 vezes por semana para melhorar a saúde e o bem-estar.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Ler um livro",
      description: "Ler um livro por mês para expandir os conhecimentos e a cultura geral.",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Aprender um novo instrumento",
      description: "Aprender a tocar um novo instrumento musical para desenvolver a criatividade e relaxar.",
      isCompleted: false,
    },
    {
      id: 6,
      title: "Cozinhar uma nova receita por semana",
      description: "Experimentar novas receitas para aprender a cozinhar e se alimentar de forma mais saudável.",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Desenvolver um projeto pessoal",
      description: "Trabalhar em um projeto pessoal para aplicar os conhecimentos adquiridos e construir um portfólio.",
      isCompleted: false,
    },
    {
      id: 8,
      title: "Participar de um curso online",
      description: "Fazer um curso online sobre um assunto de interesse para aprofundar os conhecimentos.",
      isCompleted: false,
    },
    {
      id: 9,
      title: "Fazer networking",
      description: "Conhecer novas pessoas da área para trocar ideias e expandir a rede de contatos.",
      isCompleted: false,
    },
    {
      id: 10,
      title: "Descansar e se divertir",
      description: "Separar tempo para relaxar e fazer atividades que gosta para manter o equilíbrio e a motivação.",
      isCompleted: false
    }
  ])

  const onTaskClick = (tarefaId)=>{
    const novaListaTarefas = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        // Atualizar status da tarefa
        return {...tarefa, isCompleted: !tarefa.isCompleted}
      }
      else {
        return tarefa
      }
    })
    usarTarefas(novaListaTarefas)
  }

  const removeTask = (tarefaId)=>{

    // Arrow Function Implícita
    const novaListaTarefas = tarefas.filter(item=>item.id != tarefaId)

    usarTarefas(novaListaTarefas)
  }

  const addTask = (title, description) => {

    const newTask = {
      id: tarefas.length+1,
      title,
      description,
      isCompleted: false
    }
    
    usarTarefas([...tarefas,newTask])
  }

  return (
    <div className=" flex justify-center flex-col items-center">
      <h1 className="text-red-500 font-bold w-100 text-5xl my-10">Gerenciador de Tarefas</h1>

      <div className="w-3/4">
      <AddTasks addTask={addTask} />
      </div>

      <div className="rounded-md w-3/4 mt-5">
        {/* Enviar o conteúdo do App(), ou seja, as informações que estão antes do return para o Tasks.jsx */}
        <Tasks tasks={tarefas} onTaskClick={onTaskClick} removeTask={removeTask}/>
      </div>

    </div>
  )
}
export default App

