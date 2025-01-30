import { useState } from "react"

function addTask ({addTask}) {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    return (
        <div className="bg-white px-8 w-100 rounded-md text-center">
        <h1 className="text-red-500 font-bold w-100 text-5xl py-5 text-left">Adicionar Tarefa</h1>

        <input type="text" placeholder="Título da tarefa:" className="w-full text-3xl rounded-lg mb-5 p-5 bg-black" value={title}
        onChange={(event)=>{setTitle(event.target.value)}}
        />

        <input type="text" placeholder="Descrição da tarefa:" className="w-full text-3xl rounded-lg mb-5 p-5 bg-black" value={description}
        onChange={(event)=>{setDescription(event.target.value)}}
        />

        <input type="button" value="Adicionar" className="w-3/4 text-3xl rounded-lg mb-5 p-5 bg-red-800 cursor-pointer"
        onClick={ ()=> {
            // Verificar se o usuário preencheu o título
            if (title.trim()) {
                addTask(title,description)
                setTitle("")
                setDescription("")
            }
        
        }
        
        }
           />
        </div>
        
    )
}

export default addTask