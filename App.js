
import './App.css';
import './components/button'
import Button from './components/button';
import Input from './components/input';
import ClearButton from './components/clearButton';
import { Component } from "react";
import * as math from 'mathjs'; //



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }


  addToInput = val => {
    this.setState({ value: this.state.value + val })
    console.log(this.state.value);
  }

  eval = () => {
    this.setState({ value: math.evaluate(this.state.value) });

  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input value={this.state.value} ></Input>

          <div className="row">
            <Button onClick={this.addToInput}>7</Button>
            <Button onClick={this.addToInput}>8</Button>
            <Button onClick={this.addToInput}>9</Button>
            <Button onClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button onClick={this.addToInput}>4</Button>
            <Button onClick={this.addToInput}>5</Button>
            <Button onClick={this.addToInput}>6</Button>
            <Button onClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button onClick={this.addToInput}>1</Button>
            <Button onClick={this.addToInput}>2</Button>
            <Button onClick={this.addToInput}>3</Button>
            <Button onClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button onClick={this.addToInput}>.</Button>
            <Button onClick={this.addToInput}>0</Button>
            <Button onClick={this.eval}>=</Button>
            <Button onClick={this.addToInput}>-</Button>
          </div>
          <ClearButton onClick={() => this.setState({ value: "" })}></ClearButton>
        </div>

      </div>
    )
  };
}



export default App;
