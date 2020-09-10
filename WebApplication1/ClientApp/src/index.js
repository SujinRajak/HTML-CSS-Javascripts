import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jexcel from "jexcel";
import "./jexcel/dist/jexcel.css";
import "./custom.css"
import { Container } from 'reactstrap';

class Index extends Component {
    state = {
        product: [],
        newProduct: [],
        total: 0,
        loading: true
    }

    constructor(props) {
        super(props);
        this.options = props.options;
        this.wrapper = React.createRef();
        //fetch('jexcel')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ product: data, total: 0, loading: false });
        //        console.log("1.", this.options);
        //        this.options.data = Array.prototype.map.call(data, s => [s.product.toString(), s.amount.toString(), s.rate.toString(), s.price.toString()]);
        //        console.log("2.", this.options);
        //    });
    }

    changedata = function (product) {

        var val = Array.prototype.map.call(product, s => [s.product.toString(), s.amount.toString(), s.rate.toString(), s.price.toString()]);
        console.log("4.", val);
        this.state.newProduct = val;

    }

    componentDidMount = function () {
        console.log("3.", this.options);
        fetch('jexcel')
            .then(response => response.json())
            .then(data => {
                debugger;
                this.setState({ product: data, total: 0, loading: false })
                this.changedata(this.state.product);
                this.options.data = Array.prototype.map.call(data, s => [s.product.toString(), s.amount.toString(), s.rate.toString(), s.price.toString()]);
                this.el = jexcel(this.wrapper.current, this.options);
            });
    }


    //insert row
    addrow = function () {
        this.el.insertRow();
    }

    //insert column
    addColumn = function () {
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
                    <input type="button" className="btn-primary mb-4 ml-2" value="FullScreen" onClick={() => this.changedata(this.state.product)} />

                </div>
                <Container className="text-center">
                    <div ref={this.wrapper} />
                </Container>

              
            </div>
        );
    }
}

var options = {
    data: [[]],//Index.state.newProduct,
    search: true,
    pagination: 10,
    paginationOptions: [10, 25, 50],
    columns: [
        { title: 'Product', width: 300 },
        { title: 'Amount', width: 100 },
        { title: 'Quantity', width: 100 },
        { title: 'Total Price', width: 200 }
    ],
    minDimensions: [4, 4]
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index options={options} />, rootElement);




