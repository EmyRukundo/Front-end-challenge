import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';

export default function Contain() {
     
    const [isClosed, setIsClosed] = useState('null');

    const options= [
        {label: 'contain', value: 1 },
        {label: 'equal', value: 2},
        {label: 'not equal', value: 3}
    ]
    const defaultOption = options[0];

    const closeHandle = () => {
        setIsClosed('close');
    };
    return (
        <div className='contain-input-area'>
            <div>
            <Dropdown options={options} value={defaultOption}  className='contain-dropdown' />
            </div>
            <div>
             <input type='text' className='contain-input-text' />
             </div>
             <button className='close-button' onClick={closeHandle}><strong>X</strong></button>
        </div>
    )
}
