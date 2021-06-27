import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from "./todo/TodoApp";

import("./87679624_p0.jpg").then(({default: miku}) => {
    const img = new Image()
    img.src = miku
    img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (ctx === null) return
        ctx.drawImage(img, 0, 0)
        try {
            const uri = canvas.toDataURL()
            console.log("%c ", `background: no-repeat url("${uri}");padding:${img.height * .5 * .5}px ${img.width * .5 * .5}px;background-size: 100%;`)
            console.log('from: https://www.pixiv.net/artworks/87679624')
        } catch (e) {
            alert('This example may not work properly.')
        }
    }
});

ReactDOM.render(<React.StrictMode>
    <TodoApp/>
</React.StrictMode>, document.getElementById("app"))
