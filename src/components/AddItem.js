import React, {useState} from 'react'
import '../App.css';
import './SelectData';
import SelectData from './SelectData';

export default function AddItem() {

    const [showSelect, setShowSelect] = useState(0);

    const handleIselect = () => {
        const newLength = showSelect +1;
           setShowSelect(newLength);
    };
    return (
        <div className='add-item-container'>
            <div className="button-area">
            {Array(showSelect)
            .fill("*")
            .map(index => {
                return <SelectData key={index} />;
            })}
                 <button className="add-item" onClick={handleIselect}>Add Item</button>
            </div>
        </div>
    )
}
