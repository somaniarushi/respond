// TODO: Add properties passed in through elements to the dom element being generated.
// TODO: Add listeners passed in through elements to the dom element being generated.
// TODO: Implement textNode.
const render = (element, parent) => {
    const {type, props} = element;
    const dom = document.createElement(type);
    const child = props.children;
    child.forEach(elem => render(elem, dom));
    parent.appendChild(dom);
}