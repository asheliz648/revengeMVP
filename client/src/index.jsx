import React from 'react';
import ReactDOM from 'react-dom';
import MashEntry from './components/MashEntry.jsx';

const App = (props) =>  {
  return (
    <div>
      <h1>MASH for 30+</h1>
      <MashEntry />
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));