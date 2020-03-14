import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Contain from './Contain';
import Period from './Period';
import '../App.css';

export default function SelectData() {

    const [isClicked, setIsClicked] = useState(false);
    const [isPeriod, setIsPeriod] = useState(false);
     
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
    

      const clickedHandle = (options) => {
          if( [1, 2, 6,7].includes(options.value) ){
           setIsClicked(true);
      }else if([3,4].includes(options.value)){
        setIsPeriod(true);
      }
    }
    return (
        <div className='item-container'>
            {isClicked && <Contain />}
            {isPeriod && <Period />}
        <Dropdown 
        options={options} 
        value={defaultOption} 
        onChange={clickedHandle}
         />
        </div>
    )
}
