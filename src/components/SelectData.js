import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Contain from './Contain';
import Period from './Period';
import EqualComponent from './EqualComponent';
import '../App.css';

export default function SelectData() {

    const [isClicked, setIsClicked] = useState('firstComp');
    // const [isPeriod, setIsPeriod] = useState(false);
    // const [isEqual, setIsEqual]  = useState(false);
     
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

      const [option, setoption ]= useState(defaultOption);
    
      const clickedHandle = (options) => {
          if( [1, 2, 6,7].includes(options.value) ){
           setIsClicked('contain');
           setoption(options.label)
      }else if([3,4,5].includes(options.value)){
        setIsClicked('period');
        setoption(options.label)
      }else if([8,9,10,11]){
        setIsClicked('equal');
        setoption(options.label)
      }
    }

    // const clickedHandle = (options) => {
    //     switch(options.value){
    //         case 1,2,6,7:
    //             return setIsClicked(true)

    //        case 3,4,5:
    //            return setIsPeriod(true)
               
    //     case 1,8,9,10,11: 
    //     return  setIsEqual(true)
    //     }
    // }


    return (
        <div className='item-container'>
            <div>
        <Dropdown 
        options={options} 
        value={option} 
        onChange={clickedHandle}
        className='select-dropdown'
        key={options.value}
         />
         </div>
            <div>
                
    { isClicked ==='contain' && <Contain className='side-inputs' key={options.values} />} 
    { isClicked ==='period' && <Period  className='side-inputs' key={options.values} /> }
    { isClicked ==='equal' && <EqualComponent key={options.values} />}
            </div>
        </div>
    )
}
