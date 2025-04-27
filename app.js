
import React from 'react';
import ReactDOM from 'react-dom/client';

const userapi = "https://jsonplaceholder.typicode.com/users/1";

const user = fetch(userapi)
    .then(response => response.json())
    .then(data =>{ console.log(data); return data; })
    .then( collectedData => {console.log(collectedData.name)    ; return collectedData.name;})
    .catch(error => console.error('Error fetching user:', error));


const elem=<h1 id='elem
'>this is element heading</h1>;
   
const App = () => (
    <div className="app">
        <h1>Hello {user}</h1>
        {elem}
        <p>This is a simple React application.</p>
    </div>
);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);