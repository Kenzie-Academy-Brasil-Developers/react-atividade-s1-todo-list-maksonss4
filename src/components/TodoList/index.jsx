import './style.css'

function TodoList ({todos, handleTodo}) {

    return(
        <ul>
            {
                todos.map((item, index) => {
                    return <li key={index}>{item} <button className='buttonConcluir' onClick={() => handleTodo(item)}>Tarefa concluida</button></li>
                })
            }
        </ul>
    )
}

export default TodoList