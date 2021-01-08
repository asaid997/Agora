import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import Item from './item'


function Market(props) {
    const [newItem,setNewItem] = useState("")
    const changeInput = e => setNewItem(e.target.value)

    const {inventory} = props

    const addItem = () => {
        inventory.addItem(newItem)
        setNewItem("")
    }

    return (
        <div>
            <input value={newItem} onChange={changeInput}></input>
            <button onClick={addItem}>Add</button>
            <div>
                Num of items: {inventory.numItems}
            </div>
            <div>
                {inventory.items.map(i => <Item key={Math.random()} item={i}></Item>)}
                {/* {store.items.map(i => console.log(i.name,i.price,i.quantity))} */}
            </div>
        </div>
    )
}



export default inject("inventory")(observer(Market))
// export default Market