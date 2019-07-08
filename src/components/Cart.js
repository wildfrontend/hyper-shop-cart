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
    }
}
