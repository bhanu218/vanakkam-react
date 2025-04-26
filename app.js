
import React from 'react';
import ReactDOM from 'react-dom';

const parent= React.createElement(
    "div",{id:"parent"},
    [React.createElement(
        "div",{id:"child"},
            [
                React.createElement("h1",{},"h1 tag line"),
                React.createElement("h1",{},"h1 second line "),
            ]
    
    ),
    React.createElement("div",{id:"child2"},
        React.createElement("p",{},"2nd child of parent element")),
]
);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

