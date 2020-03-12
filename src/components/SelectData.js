import React from 'react'
import '../App.css';

export default function SelectData() {

 let values = [
     {name: 'First name', id: 1},
     {name: 'Last name', id: 2},
     {name: 'Birth day', id: 3},
     {name: 'Last updated', id: 4},
    ];

      let optionTemplate = values.map(itm =>
        <option key={itm.id} value={itm.name}>{itm.name}</option>
        );

    return (
        <div className='item-container'>
            <select value={values} onChange=''>
               {optionTemplate}
            </select>
        </div>
    )
}
