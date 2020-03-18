import React, {useState } from 'react'
import '../App.css';
import './SelectData';
import SelectData from './SelectData';

export default function AddItem() {

    const [showSelect, setShowSelect] = useState(0);
    const [isClosed, setIsClosed] = useState('null');

    const handleIselect = () => {
        const newLength = showSelect +1;
           setShowSelect(newLength);
       
    };

    const closeHandle = () => {
        setIsClosed('close');
    };


    return (
        <div className='add-item-container'>
            <div className="button-area">
            {Array(showSelect)
            .fill("*")
            .map(index => {
                return isClosed=== 'null' ?  <SelectData key={index} closeHandle={closeHandle} /> : '';
            })}
            <div className='add-item-tag'>
                <div>
                 <button className="add-item" onClick={handleIselect}>Add Item</button>
                 </div>
                     {/* {
                         isClosed === 'null' ? 
                 <input type="text" data-role="taginput" data-random-color="true" className='tag-input' defaultValue='add tags'></input> : ''
                     } */}
                 </div>
            </div>
          
        </div>
    )
}

