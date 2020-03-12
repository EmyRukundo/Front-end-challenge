import React, { useState} from 'react';
import './App.css';
import AddItem from '../src/components/AddItem';




function App() {
const [addingItem, setaddingItem] = useState(false);


const handleItem = () => {
    setaddingItem(true);
};


 
  return (
    <div className="App">
         { addingItem ?  <AddItem /> : ''}

   <div className="primary-buttons">
      <button className='add-group' onClick={handleItem}>Add group</button>
      <button className="show-data">Show data</button>
   </div>
    </div>
  );
}

export default App;
