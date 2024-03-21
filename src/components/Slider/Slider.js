import React from 'react';
import './Slider.css';
import Slider1 from 'react-slider';
import Slider2 from 'react-slider';
import RangeSlider from './rangeslider';
import PropTypes from "prop-types";
import { useState } from 'react';
const Slider = ({size,type,status}) => {


  const ContinuousSlider =()=>{
    let [val,setval]=useState(20);
        
    let handleSliderChange = (val) => {
     setval(val);
       // You can perform any additional actions here based on the slider value
     }
   
    
       return (
         <div className="rang" style={{ margin: '50px' }}>
   
           <Slider1
             min={0} // Minimum value
             max={100} // Maximum value
             step={20} // Step size
   
             
         className="horizontal-slider"
         thumbClassName={`example-thumb-${size} ${status}`}
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

   const DiscreteSlider =()=>{
    let [val,setval]=useState(20);
       
    let handleSliderChange = (val) => {
     setval(val);
       // You can perform any additional actions here based on the slider value
     }
  
      return (
        <div className='rang' style={{ margin: '50px' }}>
  
          <Slider2
            min={0} // Minimum value
            max={100} // Maximum value
            step={20} // Step size
  
            
        className="horizontal-slider"
        thumbClassName={`example-thumb-${size} ${status}`}
        trackClassName="example-track"
      
            value={val} // Current value of the slider
            onChange={handleSliderChange} // Function to handle value change
          />
          <div className={`example-thumb1 thumb1${val}`}>
          <div >{val}%</div>
          <div className='tridown'></div>
          </div>
          <div className={`example-thumb2 thumb20 ${val>=20?'active':'nactive'}`} ></div>
          <div className={`example-thumb2 thumb40 ${val>=40?'active':'nactive'}`} ></div>
          <div className={`example-thumb2 thumb60 ${val>=60?'active':'nactive'}`} ></div>
          <div className={`example-thumb2 thumb80 ${val>=80?'active':'nactive'}`} ></div>
          <div className={`example-thumb2 thumb100 ${val>=100?'active':'nactive'}`} ></div>
          <div className={`example-thumb2 thumb0 active`} ></div> {/* Display the current value */}
        </div>
      );
    
  }


  return (<div>
    <h2 className='Slider'>
    Slider
    </h2>
    {type=='continuous'?
    <div><p>Continuous Slider</p>
    <ContinuousSlider /></div>
    :
    <div><p>Discrete slider</p>
    <DiscreteSlider /></div>}
    
    </div>
  )
}

Slider.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  
  /**
   * What background color to use
   */
  size: PropTypes.oneOf(['small', 'medium']),
 
  type: PropTypes.oneOf(['continuous', 'discrete']),
  status: PropTypes.oneOf(['default', 'hover', 'active']),
};

Slider.defaultProps = {
  size: 'medium',
  type: "continuous",
  status: "default",
};

export default Slider;