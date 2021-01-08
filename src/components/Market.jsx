import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Item from './item'


function Market(props) {
    const [newItem,setNewItem] = useState("")
    const changeInput = e => setNewItem(e.target.value)

    const {store} = props

    const addItem = () => {
        store.addItem(newItem)
        setNewItem("")
    }

    return (
        <div>
            <input value={newItem} onChange={changeInput}></input>
            <button onClick={addItem}>Add</button>
            <div>
                {store.items.map(i => <Item key={Math.random()} store={store} item={i}></Item>)}
                {/* {store.items.map(i => console.log(i.name,i.price,i.quantity))} */}
            </div>
        </div>
    )
}



export default observer(Market)
// export default Market