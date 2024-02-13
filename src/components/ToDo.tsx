import { useState } from "react"
type ToDoPros = {
    initialItems: string[]
}
function ToDo({ initialItems }: ToDoPros) {
    const [newItem, setNewItem] = useState('')
    const [todo, setToDo] = useState(initialItems)

    function addToToDo(value: string) {
        setToDo(state => [...state, value])
    }

    function removeItemFromToDo(itemSelected: string) {
        setToDo(state => state.filter(item => item !== itemSelected))
    }

    return (
        <>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="New ToDo" data-testid="inputField" />
            <button onClick={() => addToToDo(newItem)} data-testid="addToDoButton">Adicionar</button>
            {todo.length > 0 ? <ul>
                {todo.map((item) =>
                    <li key={item}
                        data-testid="toDo"
                    >
                        {item}
                        <button onClick={() => removeItemFromToDo(item)} data-testid="removeButton">Remover</button>
                    </li>)}
            </ul> : <div>Without any To Do</div>}
        </>
    )
}

export default ToDo
