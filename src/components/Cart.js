import { h } from 'hyperapp'

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
        if (state.indexOf(state.cart.id) !== -1) {
            return { cart: state.cart }
        }
        return { cart: [...state.cart, { ...value, number: 1, in_cart: true }] }
    }
}
