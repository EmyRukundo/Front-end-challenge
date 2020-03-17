import React, { useState } from "react";
import "./App.css";
import AddItem from "../src/components/AddItem";

function App() {
  const [addingItem, setaddingItem] = useState(0);

  const handleItem = () => {
    const newLenght = addingItem + 1;
    setaddingItem(newLenght);
  };

  return (
    <div className="App">
      {Array(addingItem)
        .fill("*")
        .map(index => {
          return <AddItem key={index} />;
        })}
      <div className="primary-buttons">
        <button className="add-group" onClick={handleItem}>
          Add group
        </button>
      </div>
    </div>
  );
}

export default App;
