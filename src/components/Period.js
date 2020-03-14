import React from 'react';
import Dropdown from 'react-dropdown';

export default function Period() {

    const options= [
        {label: 'on', value: 1 },
        {label: 'before', value: 2},
        {label: 'after', value: 3}
    ]
    const defaultOption = options[0];
    return (
        <div>
            <Dropdown options={options} value={defaultOption} />
        </div>
    )
}
