import React from 'react.development' ;
import ReactDOM from 'react-dom.development' ;

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                this is some text
            </div>
        )
    }
}

ReactDOM.render(<Test />, document.getElementById('container'));