import React from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';

export default function Contain() {

    const options= [
        {label: 'contain', value: 1 },
        {label: 'equal', value: 2},
        {label: 'not equal', value: 3}
    ]
    const defaultOption = options[0];
    return (
        <div className='contain-input-area'>
            <div className='contain-dropdown'>
            <Dropdown options={options} value={defaultOption} />
            </div>
            <div className='contain-input'>
             <input type='text' className='contain-input-text' />
             </div>
        </div>
    )
}
