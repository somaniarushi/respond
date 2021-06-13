const isEventListener = (name) => (name.substring(0, 3)==="get");

const render = (element, parent) => {
    const {type, props} = element;

    // Create DOM element.
    let dom;
    if (type === "plain-text") {
        dom = document.createTextNode(props.value || "")
    } else {
        dom = document.createElement(type);
    }

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

export const RespondDOM = {render};