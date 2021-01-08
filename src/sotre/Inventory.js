import { observable, action, makeObservable, computed } from 'mobx'
import {Item} from './item'


export default class Inventory {
    constructor() {
        this.items = []
        // your code here

        makeObservable(this, {
            items: observable,
            addItem: action,
            changePrice: action,
            buyItem: action,
            numItems: computed
        })
    }

    addItem = (name, price, quantity) => {
        let item = this.items.find(i => i.name === name)
        if(item)
            item.quantity++
        else{
            const ni = new Item(name, price, quantity)
            this.items.push(ni)
        }
    }
    changePrice = (name,p) => {
        let item = this.items.find(i => i.name === name)
        item.price = p
    }
    buyItem = (name) => {
        let i = this.items.findIndex(i => i.name === name)
        if(this.items[i].quantity === 0)
            this.items.splice(i,1)
        else
            this.items[i].quantity--
    }
    get numItems() {
        return this.items.length
    }

} 