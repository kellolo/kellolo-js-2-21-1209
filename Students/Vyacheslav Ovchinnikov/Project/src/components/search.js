export default class SearchController {
    constructor() {
        this.searchString = '';
        this.regularExpression = null;
        this.container = document.querySelector('#search-controller');
        this._init();
    }

    _init() {
        this._render();
        this._handleActions();
    }

    _search(ctx) {
        ctx._filter();
    }

    _handleActions() {
        this.container.addEventListener('click', ev => {
            if (ev.target.name == 'search') {
                this._search();
            }
        })

        this.container.addEventListener('keyup', ev => {
            console.log(ev)
            if (ev.target.name == 'search-line') {
                if (ev.keyCode == 13) {
                    this._search();
                } else {
                    this.searchString = ev.target.value;
                    this.regularExpression = new RegExp(this.searchString, 'i');
                }
            }
        })
    }

    _render() {
        this.container.innerHTML = `
            <a class="logo" href="#">
                <img class="logo__img" src="../src/assets/imgs/logo.png" alt="logo">BRAN<span>D</span>
            </a>
            <form action="#" class="search">
                <a href="#" class="search__browse">Browse <i class="fas fa-caret-down"></i></a>
                <input name="search-line" type="text" placeholder="Search for Item...">
                <button type="submit"><i class="fas fa-search" name="search"></i></button>
            </form>
        `
    }
}