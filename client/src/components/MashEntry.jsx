import React, { useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime'
import MashedLife from './MashedLife.jsx'
import '../css/MashedEntry.css'

const MashEntry = (props) => {
  const [country, setCountry] = useState('');
  const [luckyNum, setLuckyNum] = useState(0);
  const [brewery, setBrewery] = useState('');
  //responses
  const [response, setResponse] = useState({});

  const handleSelectInput = (e) => {
    console.log('handle select input holder');
    if (e.target.name === 'countries') {
      setCountry(e.target.value);
    } else {
      setBrewery(e.target.value);
    }
  }

  const handleTextInput = (e) => {
    console.log('handle text input holder');
    setLuckyNum(parseInt(e.target.value));
  }

  const handleBuildMyMash =  async (e) => {
    e.preventDefault();
    console.log('mash button pushed');

    try {
      const { data } = await axios.get('http://localhost:3092/mashMe', {params: { country: country, luckyNum: luckyNum, brewery: brewery }, headers: {'Access-Control-Allow-Origin': '*', 'Accept': '*'}})
      console.log('we got past it.');
      setResponse(data);
    }
    catch (error) {
      console.error(error)
    }
  }
  if (response.brewery === undefined) {
    return(
      <div className="mashedEntryHolder">
        <h2 className="mashHeader">Answer the questions below to reveal the future you!</h2>
        <form>
          <label className="label" htmlFor="country-select">Select the country with your favorite accent: </label>
          <select className='selectMenu' onChange={handleSelectInput} name="country" id="country-select">
            <option value="">--Please Choose an Option--</option>
            <option value="United States">United States</option>
            <option value="France">France</option>
            <option value="Australia">Australia</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="Jordan">Jordan</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Ireland">Ireland</option>
          </select>
          <br></br>
          <label className="label">
            Enter your lucky number:
            <input className="luckyNum" onChange={handleTextInput} type="text" name="luckyNum" />
          </label>
          <br></br>
          <label className="label" htmlFor="brewery-select">Select one of the words: </label>
          <select className="selectMenu" onChange={handleSelectInput} name="brewery" id="brewery-select">
            <option value="">--Please Choose an Option--</option>
            <option value="nano">nano</option>
            <option value="micro">micro</option>
            <option value="large">large</option>
          </select>
          <br></br>
          <button className="mashBtn" onClick={handleBuildMyMash}>Build my MASH!</button>
        </form>
      </div>
    )
  } else {
    return (
      <MashedLife response={response}/>
    )
  }

}

export default MashEntry;