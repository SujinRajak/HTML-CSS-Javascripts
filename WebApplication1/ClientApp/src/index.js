import 'bootstrap/dist/css/bootstrap.css';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import jexcel from "jexcel";
import "./jexcel/dist/jexcel.css";
import "./custom.css"
import { Container } from 'reactstrap';

class Index extends Component {

    constructor(props) {
        super(props);
        this.options = props.options;
        //console.log(this.options);
        this.wrapper = React.createRef();
        this.state = {
            Product:'',
            Amount:'',
            Quantity:'',
            Total:''
        }

    }

    componentDidMount = function () {
        this.el = jexcel(this.wrapper.current, this.options);
    }

    //insert row
    addrow = function(){
        this.el.insertRow();
    }

    //insert column
    addColumn= function () {
        this.el.insertColumn();
    }

    //delete first row
    deleteRow = function () {
        this.el.deleteRow();
    }

    //delete first row
    deleteCol = function () {
        this.el.deleteColumn();
    }

    fullscreen = function () {
        this.el.fullscreen(true);
    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <div className="text-center">
                    <input type="button" className="btn-primary mb-4 ml-5" value="Add New Row" onClick={() => this.addrow()} />
                    <input type="button" className="btn-primary mb-4 ml-2" value="Add New Cloumn" onClick={() => this.addColumn()} />
                    <input type="button" className="btn-primary mb-4 ml-2" value="Delete Row" onClick={() => this.deleteRow()} />
                    <input type="button" className="btn-primary mb-4 ml-2" value="Delete Column" onClick={() => this.deleteCol()} />
                    <input type="button" className="btn-primary mb-4 ml-2" value="FullScreen" onClick={() => this.fullscreen()} />    
                </div>
                <Container className="text-center">
                    <div ref={this.wrapper} />
                </Container>
                
                

            </div>
        );
    }
}

var options = {
    data: [[]],
    columns: [
        { title: 'Product', width: 300 },
        { title: 'Amount', width: 100 },
        { title: 'Quantity', width: 100 },
        {title:'Total Price',width:200}
    ],
    minDimensions: [4, 4]
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index options={options} />, rootElement);



//registerServiceWorker();

