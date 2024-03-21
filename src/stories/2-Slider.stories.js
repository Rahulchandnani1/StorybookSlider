
import React from 'react';
import { fn } from '@storybook/test';
import Slider from '../components/Slider';
import { withControls } from '@storybook/addon-controls';


export default {
  title: 'Slider',
  component: Slider,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
 
  
};



export const Medium = {
  args: {
    size: 'medium',
    label: 'Slider',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Slider',
  },
};
export const Continuous = {
  args: {
    size: 'continuous',
    label: 'Slider',
  },
};

export const Discrete = {
  args: {
    size: 'discrete',
    label: 'Slider',
  },
};

export const Default = {
  args: {
    status: 'default',
    label: 'Slider',
  },
};

export const Hover = {
  args: {
    status: 'hover',
    label: 'Slider',
  },
};


export const Active = {
  args: {
    status: 'active',
    label: 'Slider',
  },
};

