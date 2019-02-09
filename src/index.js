import React from 'react';
import ReactDOM from 'react-dom';
import MilitaryTime from './components/MilitaryTime';
import './index.css';

class App extends React.Component {
  state = {time: new Date().toLocaleTimeString()};
  
  tick(){
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
 
  componentDidMount(){
    this.intervalID = setInterval(
      () => this.tick(), 900
    );
  }

  render(){
    return (
      
      <div className="main">
        <MilitaryTime />
        {this.state.time}
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('#root'));