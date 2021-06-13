const render = (element, parent) => {
    const {type, props} = element;
    const dom = document.createElement(type);
    const child = props.children;
    child.forEach(elem => render(elem, dom));
    parent.appendChild(dom);
}