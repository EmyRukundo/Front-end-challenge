import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../App.css';

export default function SelectData() {

       const options  = [
     {label: 'First name', value: 1},
     {label: 'Last name', value: 2},
     {label: 'Birth day', value: 3},
     {label: 'Last updated', value: 4},
     {label: 'sign up date', value: 5},
     {label: 'Email address', value: 6},
     {label: 'Phone number', value: 7},
     {label: 'Height', value:8 },
     {label: 'Just a number', value: 9},
     {label: 'Weight', value: 10},
     {label: 'Age', value: 11}
    ];
      const defaultOption = 'select data type';

    return (
        <div className='item-container'>
        <Dropdown 
        options={options} 
        value={defaultOption} 
         />
        </div>
    )
}
