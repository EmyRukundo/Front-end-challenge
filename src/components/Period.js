import React from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';

export default function Period() {
   
    const options= [
        {label: 'on', value: 1 },
        {label: 'before', value: 2},
        {label: 'after', value: 3}
    ]
    const defaultOption = options[0];

  let date = new Date();
  let currentDate = date.toISOString().split('T')[0];
    return (
        <div className='contain-input-area'>
        <div>
            <Dropdown 
            options={options} 
            value={defaultOption} 
            className='contain-dropdown'
            />
        </div>
        <div>
             <input defaultValue={currentDate} className='contain-input-text'  type='date'/>
             </div>
             <button className='close-button'><strong>X</strong></button>
        </div>
    )
}
