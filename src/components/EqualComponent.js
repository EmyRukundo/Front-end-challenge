import React from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';

export default function EqualComponent() {

    const options= [
        {label: 'equal', value: 1 },
        {label: 'greater than', value: 2},
        {label: 'less than', value: 3},
        {label: 'between', value: 4}
    ]
    const defaultOption = options[0];


    return (
        <div className='contain-input-area'>
            <div>
            <Dropdown options={options} value={defaultOption}   className='contain-dropdown' />
            </div>
            <div>
             <input type='number' className='contain-input-text' />
             </div>
             <button className='close-button'><strong>X</strong></button>
        </div>
    )
}
