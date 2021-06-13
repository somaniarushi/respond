const isEventListener = (name) => (name.substring(0, 3)==="get");

// TODO: Add listeners passed in through elements to the dom element being generated.
// TODO: Implement textNode.
const render = (element, parent) => {
    const {type, props} = element;

    // Create DOM element.
    const dom = document.createElement(type);

    for (let prop in props) {
        // Add event Listeners
        if (isEventListener(prop)) {
            const event = prop.toLowerCase().substring(3);
            dom.addEventListener(event, props[prop])
        } 
        
        // Add properties
        else if (prop != "children"){
            dom[prop] = props[prop];
        }
    }


    // Render children.
    const child = props.children;
    child.forEach(elem => render(elem, dom));

    // Append current node to parent-node in DOM.
    parent.appendChild(dom);
}