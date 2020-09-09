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
import datainfo from "./productService";
import { data } from 'jquery';

class Index extends Component {
    state = {
        product: [],
        newProduct: [],
        total: 0,
        loading:true
    }

    constructor(props) {
        super(props);
        this.options = props.options;
        //console.log(this.options);
        this.wrapper = React.createRef();
        //populating data
        fetch('jexcel')
            .then(response => response.json())
            .then(data => {
                this.setState({product:data,total:0,loading:false})
          });
    }

    changedata = function(product) { 

      

        var val = Array.prototype.map.call(product, s => [s.product.toString(), s.amount.toString(), s.rate.toString(), s.price.toString()]);
        //console.log(val);
        this.state.newProduct = val;

        //Array.prototype.map.call(product, s => [s.product, s.amount, s.rate, s.price]).toString();
        //console.log(data);
      //  var data = Object.id([product.id, product.product, product.amount, product.rate, product.price]);
        //product.forEach(function(id,product,amount,rate,price){
        //    console.log(id, product, amount, rate, price);
        //})
        //const iterator = product.values();

        //for (const value of iterator) {
        //    console.log(value);
        //}
    }


   

    static renderForecastsTable(product) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount (C)</th>
                        <th>rate (F)</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(products =>
                        <tr key={products.id}>
                            <td>{products.product}</td>
                            <td>{products.amount}</td>
                            <td>{products.rate}</td>
                            <td>{products.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }



    componentDidMount = function () {
        this.changedata(this.state.product);
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
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Index.renderForecastsTable(this.state.product); 
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

                <h1 id="tabelLabel" >Product</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }  
}

//var weHave = [ColName:colval];
//var weNeed = [["a","10","20","30"],["b","22","12","34"]];
var options = {
    data: this.state.newProduct,
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



//registerServiceWorker();

