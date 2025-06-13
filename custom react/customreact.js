const { createElement, Children } = require("react")

function customRender(reactElement,container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement (reactElement.type)
    domElement.innerHTML = reactElement.Children
    for(const prop in reactElement.props){
        if(props === 'Children') continue;
        domElement.setAttribute('prop',reactElement.props[prop])
    }
    container.appendChild(domElement)
}




 const { Children } = require("react")

// here we have used reactelement because rect form it tree like something
const  reactElement = {
    type: 'a',
    props:{ // here props is a object
        href: 'https://google.com',
        target: '_blank'
    },Children: 'click me to visit google'

}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)