
/** Function to create a Respond component. Accepts a string type, a dictionary of  
 * properties and listeners, and a list of zero or more Respond components as
 * children.
 */
function createElement(type, config, children) {
    const props = Object.assign({}, config);
    if (children.length > 0) {
        props.children = children;
    }
    return {type, props};
}

function createTextElement(config, text) {
    const props = Object.assign({}, config);
    props.value = text;
    return {type: 'plain-text', props};
}

const Respond = {createElement, createTextElement};
export default Respond;