import React, { useState } from 'react';
import Slider from 'react-slider';


const ContinuousSlider =({props})=>{
 let [val,setval]=useState(50);
     
 let handleSliderChange = (val) => {
  setval(val);
    // You can perform any additional actions here based on the slider value
  }

 
    return (
      <div>

        <Slider
          min={0} // Minimum value
          max={100} // Maximum value
          step={20} // Step size

          
      className="horizontal-slider"
      thumbClassName={`example-thumb-${props.size}`}
      trackClassName="example-track"
    
          value={val} // Current value of the slider
          onChange={handleSliderChange} // Function to handle value change
        />
        <div className={`example-thumb1 thumb1${val}`}>
        <div >{val}%</div>
        <div className='tridown'></div>
        </div>
         {/* Display the current value */}
      </div>
    );
  
}



export default ContinuousSlider;
