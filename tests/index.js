import {render} from '../responDOM.js';

function runner() {
    const root = document.getElementById('root');
    console.log("Got in here, whattt")
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
    render(elem, root)
}

runner();