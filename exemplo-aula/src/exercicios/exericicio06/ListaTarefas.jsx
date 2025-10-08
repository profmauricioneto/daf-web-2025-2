import React, { useEffect, useState } from "react";

const ListaTarefas = () => {

    const [tarefas, setTarefas] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
        const tarefas = [
            {id: 1, title: 'estudar react', description: 'estudar react hoje', isPeding: true},
            {id: 2, title: 'estudar js', description: 'estudar js hoje', isPeding: true},
            {id: 3, title: 'estudar node', description: 'estudar node hoje', isPeding: true},
            {id: 4, title: 'estudar hooks', description: 'estudar hooks hoje', isPeding: true}
        ]
        setTarefas(tarefas);
        setCarregando(false);
    }, 2000);
        
    }, []);

    return(
        <>
            <h1 className="text-center">Exercicio de API simulada</h1>

            {carregando ? 
            (<p className="text-red-800 text-xl">Carregando os dados da API...</p>) : 
            (
                <div>
                    {tarefas.map((tarefa) => (
                        <div key={tarefa.id}>
                            {tarefa.title} - {tarefa.description}
                        </div>
                    ))}
                </div>
            )
        }
        </>
    )
}

export default ListaTarefas;