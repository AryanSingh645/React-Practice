function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// Making of a react element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

//Selecting a container to render the react element on it
const mainContainer = document.querySelector('#root')

//Calling the render method
customRender(reactElement, mainContainer); 
