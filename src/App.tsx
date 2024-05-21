import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
// let role:[number,string];
// role=[5,"stu"];
// only number,string allowed and that to in only 2 allowed.
// function App() {
//   return (
//     <div>Hello World
//     </div>
//   );
// }

const App: React.FC = () => {
  return (
    
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField />
      </div>

  );
}
export default App;
