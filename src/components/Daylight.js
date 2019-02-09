import React from 'react';


const lightConfig = {
  day: {
    text: "Let's get some sun!!!",
    iconName: 'sun'
  },
  night: {
    text: 'Time to get some Zzzzz',
    iconName: 'moon'
  }
}



const getLight = (milTime) =>{
  if(milTime >= 7 && milTime < 18 ){
    return 'day';
  }
  else{
    return 'night';
  }
};

const Daylight = (props) => {
  const light = getLight(props.milTime);
  const {text, iconName} = lightConfig[light];
  //for some reason it's saying that text is undefined
  return (
    <div className={`time-display ${light}`}>
      <i className={`icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon`} />
    </div>
  );
}

export default Daylight;