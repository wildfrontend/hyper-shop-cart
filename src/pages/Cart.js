import { h } from 'hyperapp'
import * as R from 'ramda'

export const state = {
    cart: [
        {
            id: 3343,
            in_cart: true,
            number: 1,
            poster_path:
                'image.tmdb.org/t/p/w300/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
            price: 29,
            title: 'The Godfather'
        }
    ]
}

export const actions = {
    addToCart: value => state => {
        // findIndex 找不到結果會　return -1
        if (state.cart.findIndex((item, i) => item.id === value.id) !== -1) {
            state.cart.map(item => {
                if (item.id === value.id) {
                    item.number += 1
                }
            })
            return {
                cart: [...state.cart]
            }
        } else {
            return {
                cart: [...state.cart, { ...value, number: 1, in_cart: true }]
            }
        }
    },
    updateCart: value => state => {
        switch (value.command) {
            case 'increment':
                state.cart.map(item => {
                    if (item.id === value.id) {
                        item.number += 1
                    }
                })
                return {
                    cart: [...state.cart]
                }
            case 'decrement':
                state.cart.map(item => {
                    if (item.id === value.id && item.number > 1) {
                        item.number -= 1
                    }
                })
                return {
                    cart: [...state.cart]
                }
            default:
                return {
                    cart: [...state.cart]
                }
        }
    },
    removeCart: id => state => {
        return {
            cart: state.cart.filter(item => {
                return item.id !== id
            })
        }
    }
}

export const Cart = ({ state, actions }) => props => {
    let { cart } = state
    let { removeCart, updateCart } = actions
    return (
        <div class='container'>
            <h1>Cart</h1>
            {cart.map(item => {
                let { title, in_cart, number, poster_path, price, id } = item
                return (
                    <article class='message'>
                        <div class='message-header'>
                            <p>{title}</p>
                            <button
                                class='delete'
                                aria-label='delete'
                                onclick={() => removeCart(id)}
                            />
                        </div>
                        <div class='message-body'>
                            <input class='input' readOnly value={number} />
                            <button
                                class='button'
                                onclick={() =>
                                    updateCart({ id, command: 'decrement' })
                                }
                            >
                                -
                            </button>
                            <button
                                class='button'
                                onclick={() =>
                                    updateCart({ id, command: 'increment' })
                                }
                            >
                                +
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
