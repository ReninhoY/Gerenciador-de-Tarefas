import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function Tasks(props) {

  return (
    <div className="bg-white px-8 pb-6 rounded-md">
      <h1 className="text-red-500 font-bold w-100 text-5xl py-5">Tarefas</h1>

      {/* Ao usar JS, deixar entre chaves */}
      {props.tasks.map((tarefa) => (

        <div key={tarefa.id} className="flex space-x-4 justify-center">
          {/* Precisa haver um id */}
    
          <h1
            className={`bg-black mb-5 p-5 rounded-md text-3xl w-3/5 cursor-pointer ${tarefa.isCompleted?'line-through':''}`}
            onClick={() => props.onTaskClick(tarefa.id)}
          >
            {tarefa.title}
          </h1>
          <button className="bg-black mb-5 p-5 rounded-md text-3xl ">
            <ChevronRightIcon className="w-8 h-8" />
          </button>
          <button className="bg-black mb-5 p-5 rounded-md text-3xl "
          onClick={()=>props.removeTask(tarefa.id)}>
            <DeleteIcon className="w-8 h-8" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
