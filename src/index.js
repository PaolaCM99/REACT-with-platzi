import React from 'react';
import reactDom from 'react-dom';

import BadgeNew from './pages/badgenew.js';

const container = document.getElementById("root");
reactDom.render(<BadgeNew/>, container);




// Javascript normal

// const element = createElement("h1");
// element.innerText = "Hola, como vas"
// const container = document.getElementById("root")
// container.appendChild(element)

// Con react

// const jsx = <h1> Hola, sirve por favor</h1>
// React.createElement("etiqueta",{props/ propiedades}, "los hijos")
// const element = React.createElement(
// 	"a",
// 	{href:"https://platzi.com"}, 
// 	"Platzi");
// const container = document.getElementById("root");
// // reactDom.render(_que_, _donde_)
// reactDom.render(element, container)

