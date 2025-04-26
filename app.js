
import React from 'react';
import ReactDOM from 'react-dom';

const parent= React.createElement(
    "div",{id:"parent"},
    [React.createElement(
        "div",{id:"child"},
            [
                React.createElement("h1",{},"this is 1st child and 1st h1"),
                React.createElement("h2",{},"this is 1st child and 2nd h2"),]
    
    ),
    React.createElement("div",{id:"child2"},
        React.createElement("p",{},"2nd child of parent element")),
]
);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

