import React, {useState} from 'react'
import '../App.css';
import './SelectData';
import SelectData from './SelectData';

export default function AddItem(isClosed) {

    const [showSelect, setShowSelect] = useState(0);
    // const [isClosed, setIsClosed] = useState('null');

    const handleIselect = () => {
        const newLength = showSelect +1;
           setShowSelect(newLength);
    };

    // const closeHandle = (() => {
    //     setIsClosed('close');
    //  })

    return (
        <div className='add-item-container'>
            <div className="button-area">
            {Array(showSelect)
            .fill("*")
            .map(index => {
                return isClosed === 'closel' && <SelectData key={index} />;
            })}
                 <button className="add-item" onClick={handleIselect}>Add Item</button>
            </div>
            {/* <div>
            {
                isClosed ==='null' && <button  onClick={closeHandle} />
            }
            </div> */}
        </div>
    )
}

