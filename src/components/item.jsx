import React, { useState } from 'react'
import { observer } from 'mobx-react'

function Item(props) {
    const [edit, setEdit] = useState(false)
    const [price, setPrice] = useState(0)
    const i = props.item
    const { store } = props


    const cancel_edit = () => setEdit(false)
    const changeInput = e => setPrice(e.target.value)
    const changePrice = () => {
        store.changePrice(i.name, price)
        setEdit(false)
    }
    const doubleClicked = () => setEdit(true)

    return (
        // <div>haha hehe</div>
        <li onDoubleClick={doubleClicked}>{edit ?
            <span>
                <input placeholder="New price" type="number" onChange={changeInput} value={price}></input>
                <button onClick={changePrice}>change</button>
                <button onClick={cancel_edit}>back</button>
            </span> :
            <span>{i.quantity} {i.name} available at ${i.price} per item</span>}
        </li>
    )
}

export default observer(Item)