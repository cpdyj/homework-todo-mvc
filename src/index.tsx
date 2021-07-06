import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from "./todo/TodoApp";

const scaleFactor = 0.25
import("./87679624_p0.jpg").then(({default: miku}) => {
    const img = new Image()
    img.src = miku
    img.onload = () => {
        const width = img.width * scaleFactor
        const height = img.height * scaleFactor
        console.log("%c ", `background: no-repeat url("${miku}");padding:${height}px ${width}px;background-size: 100%;`)
        console.log('from: https://www.pixiv.net/artworks/87679624')
    }
});

ReactDOM.render(<React.StrictMode>
    <TodoApp/>
</React.StrictMode>, document.getElementById("app"))
