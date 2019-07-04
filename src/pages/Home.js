import { h } from 'hyperapp'

import _ from 'lodash'
import * as Product from '../components/Product'
import { Filter } from '../components/Filter'

export const Home = () => {
    return (
        <div>
            <section class='hero is-medium is-dark is-bold'>
                <div class='hero-body'>
                    <div class='container'>
                        <h1 class='title'>HyperApp 練習用購物網站</h1>
                        <h2 class='subtitle'>電影購物車</h2>
                    </div>
                </div>
            </section>
            <div class='container' style={{ marginTop: '4rem' }}>
                <div class='columns'>
                    <div class='column is-3'>
                        <Filter />
                    </div>
                    <div class='column is-9'>
                        <div class='columns is-multiline'>
                            {_.times(9, () => {
                                return (
                                    <div class='column is-4'>
                                        <Product.Card />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
