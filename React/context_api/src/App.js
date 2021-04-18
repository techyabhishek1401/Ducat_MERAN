import React, { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import { MyContext } from './Context';
function App() {
  const [name, setName] = useState("");

  const nameChnage = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  return (
    <div className="App">
      <MyContext.Provider value={{ name, nameChnage }}>
        {/* <Comp1 name={name} />
        <Comp2 onNameChange={nameChnage} /> */}
        <Comp1 />
        <Comp2 />
      </MyContext.Provider>
    </div>
  );
}

export default App;
