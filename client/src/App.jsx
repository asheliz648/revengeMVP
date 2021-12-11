import React from 'react';
import ReactDOM from 'react-dom';
import MashEntry from './components/MashEntry.jsx';

const App = (props) =>  {
  return (
    <div>
      <h1 style={{fontFamily: 'Architects Daughter', fontSize: '72px', color: 'fuchsia', background: 'yellow', width: 'fit-content', margin: 'auto'}}>MASH! but for older people</h1>
      <MashEntry />
    </div>
  )
}

export default App;

