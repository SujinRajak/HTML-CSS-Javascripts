import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import jexcel from 'jexcel'
import { data } from 'jquery';
import "./jexcel.css" ;
export class JavaScript extends Component {


    constructor(props) {
        super(props);
        this.options = props.options;
       // console.log(this.options);
        this.wrapper = React.createRef();
    }


  

    componentDidMount = function () {
        this.el = jexcel(this.wrapper.current, this.options);
    }

    addRow = function () {
        this.el.insertRow();
    }

    render() {
        return (
            <div>
                <div ref={this.wrapper}/><br /><br />
                <input type='button' value='Add new row' onClick={() => this.addRow()}></input>
            </div>
        );
    }
}

var options = {
    data: [[]],
    minDimensions: [10, 10]
};

const rootElement = document.getElementById("root");
ReactDOM.render(<JavaScript options={options} />, rootElement);














