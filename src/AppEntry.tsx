import React from "react";
import ReactDOM from "react-dom";
import {TodoApp} from "./todo/TodoApp";
import '@js-joda/timezone'

export const main = () => {
    ReactDOM.render(<React.StrictMode>
        <TodoApp/>
    </React.StrictMode>, document.getElementById("app"))
}
