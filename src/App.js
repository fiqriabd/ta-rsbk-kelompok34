import React from 'react';
import './App.css';
import Parent from "./Komponen/parent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Katalog Pemain Sepakbola</h2>
        <Parent />
      </div>
    )
  }
}

export default App;
