import React from 'react';
import Daylight from './Daylight';

class MilitaryTime extends React.Component {
  state={milTime: new Date().getHours()};

  milTick(){
    this.setState({ milTime: new Date().getHours()})
  };

  componentDidMount(){
    console.log(this.state.milTime);
    this.intervalID = setInterval(
      () => (this.milTick(() => 
        console.log(this.state.milTime))
      ), 59000
    );
  };

  render(){
    return (
      <div>
        <Daylight milTime={this.state.milTime}/>
      </div>
    );
  }
  
};

export default MilitaryTime;