import { useState } from 'react'
import './style.css'

function Form ({addTodo}) {
    const [valueInput, setValueInput] = useState('')

    return(
        <form>

            <input 
                type='text'
                value={valueInput}
                placeholder='Insira sua tarefa'
                onChange={(event) => setValueInput(event.target.value)}
            />

            <button 
                onClick={(event) => {
                    event.preventDefault()                    
                    valueInput && addTodo(valueInput)
                }}
                type='submit'
                className='buttonForm'
                >Enviar
            </button>

        </form>
    )
}

export default Form