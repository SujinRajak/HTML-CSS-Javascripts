import 'bootstrap/dist/css/bootstrap.css';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import jexcel from "jexcel";
import "./components/jexcel.css";

class Index extends Component {


    constructor(props) {
        super(props);
        this.options = props.options;
        //console.log(this.options);
        this.wrapper = React.createRef();
    }

    componentDidMount = function () {
        this.el = jexcel(this.wrapper.current, this.options);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <div ref={this.wrapper} />
            </div>
        );
    }
}

var options = {
    data: [[]],
    minDimensions: [10, 10]
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index options={options} />, rootElement);



//registerServiceWorker();

