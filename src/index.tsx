import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from "./todo/TodoApp";

import("./87679624_p0.jpg").then(({default: miku}) => {
    (() => {
        console.log(miku)
        const img = new Image();
        img.src = miku;
        img.onload = () => {
            console.log("%c ", `background: no-repeat url("${miku}");padding:${img.height * .5 * .25}px ${img.width * .5 * .25}px;background-size: 100%;`)
        }
    })()
});

ReactDOM.render(<React.StrictMode>
    <TodoApp/>
</React.StrictMode>, document.getElementById("app"))
