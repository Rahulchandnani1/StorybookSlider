import React from 'react';

import "./range.css";

class RangeSlider extends React.Component {
  

  render() {
    return (
      <div>
      <div class="range-slider flat" data-ticks-position='top'>
  <input type="range" min="-500" max="500" value="-220" oninput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))"/>
 
  <input type="range" min="-500" max="500" value="400" oninput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))"/>

  <div class='range-slider__progress'></div>
</div>

      </div>
    );
  
}
}
export default RangeSlider;
