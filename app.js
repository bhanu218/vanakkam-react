
/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>this is h1 tag</h1>
 *              <h1> this is h2 tag</h1>
 *      </div>
 * </div>
 * 
 */


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




// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello React world"
// );
        
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

