import RespondDOM from '../respond-dom.js';
import Respond from '../respond.js';

function runner() {
    console.log("runner");

    const elem = Respond.createElement('div', 
            {id: 'root-child', style: 'background-color: grey;'}, 
            [Respond.createTextElement({}, 'Hello World!')]
        );
    RespondDOM.render(elem, document.getElementById('root'));
}

runner();