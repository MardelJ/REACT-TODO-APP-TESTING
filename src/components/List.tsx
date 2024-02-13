import { useState } from "react"
type ListPros = {
    initialItems: string[]
}
function List({ initialItems }: ListPros) {
    const [newItem, setNewItem] = useState('')
    const [list, setList] = useState(initialItems)

    function addToList(value: string) {
        setList(state => [...state, value])
    }

    function removeItemFromList(itemSelected: string) {
        setList(state => state.filter(item => item !== itemSelected))
    }

    return (
        <>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Novo Item" />
            <button onClick={() => addToList(newItem)} data-testid="button">Adicionar</button>
            <ul>
                {list.map((item) =>
                    <li key={item}>
                        {item}
                        <button onClick={() => removeItemFromList(item)} data-testid="removeButton">Remover</button>
                    </li>)}
            </ul>
        </>
    )
}

export default List
