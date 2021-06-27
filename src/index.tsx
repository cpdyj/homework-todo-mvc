import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from "./todo/TodoApp";

import("./87679624_p0.jpg").then(({default: miku}) => {
    console.log("%c ", `background: no-repeat url("${miku}");padding:${1200 * .5 * .5}px ${765 * .5 * .5}px;background-size: 100%;`)
});

ReactDOM.render(<React.StrictMode>
    <TodoApp/>
</React.StrictMode>, document.getElementById("app"))
