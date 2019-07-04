import { h } from 'hyperapp'

export const Filter = () => {
    return (
        <nav class='panel'>
            <p class='panel-heading'>商品分類</p>
            <div class='panel-block'>
                <p class='control has-icons-left'>
                    <input class='input is-small' type='text' placeholder='搜尋商品' />
                    <span class='icon is-small is-left'>
                        <i class='fas fa-search' aria-hidden='true' />
                    </span>
                </p>
            </div>
            <p class='panel-tabs'>
                <a class='is-active'>all</a>
                <a>public</a>
                <a>private</a>
                <a>sources</a>
                <a>forks</a>
            </p>
            <a class='panel-block is-active'>
                <span class='panel-icon'>
                    <i class='fas fa-book' aria-hidden='true' />
                </span>
                bulma
            </a>
            <a class='panel-block'>
                <span class='panel-icon'>
                    <i class='fas fa-book' aria-hidden='true' />
                </span>
                marksheet
            </a>
            <a class='panel-block'>
                <span class='panel-icon'>
                    <i class='fas fa-book' aria-hidden='true' />
                </span>
                minireset.css
            </a>
            <a class='panel-block'>
                <span class='panel-icon'>
                    <i class='fas fa-book' aria-hidden='true' />
                </span>
                jgthms.github.io
            </a>
            <a class='panel-block'>
                <span class='panel-icon'>
                    <i class='fas fa-code-branch' aria-hidden='true' />
                </span>
                daniellowtw/infboard
            </a>
            <a class='panel-block'>
                <span class='panel-icon'>
                    <i class='fas fa-code-branch' aria-hidden='true' />
                </span>
                mojs
            </a>
         
            <div class='panel-block'>
                <button class='button is-link is-outlined is-fullwidth'>重新設定</button>
            </div>
        </nav>
    )
}
