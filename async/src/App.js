import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         number: 5
      }
   }

   handleClick = () => {
      this.setState((prevState, prevProps) => (
         {
            number: prevState.number + 1
         }
      ))
   }

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>{this.state.number}</p>
               <button
                  onClick={this.handleClick}
               >+</button>
            </header>
         </div>
      );
   }
}

export default App;
