import React from 'react';
import ReactDOM from 'react-dom';
import { Potato } from '@creative-order/library';

const HelloWorld = () => {
    return (
        <div>

        <h1>
            Hello World
        </h1>
            <Potato />
        </div>

    );
}

ReactDOM.render(<HelloWorld/>, document.getElementById("root"));
