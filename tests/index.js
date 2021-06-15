import RespondDOM from '../respond-dom.js';
import Respond from '../respond.js';

function runner() {
    console.log("runner");
    const elem = {
        type: "div",
        props: {
            id: "root-child",
            children: [
                {type: "plain-text", props: {value: "Hello World!", children:[]}}
            ],
            style: "background-color: grey;"
        }
    }
    RespondDOM.render(elem, document.getElementById('root'));
}

runner();