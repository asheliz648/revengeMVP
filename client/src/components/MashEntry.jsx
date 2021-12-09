import React, { useState } from 'react';

const MashEntry = (props) => {
  return(
    <div>
      <h2>let's get mashed!</h2>
      <form>
        <label htmlFor="country-select">Select the country with your favorite accent: </label>
        <select name="countries" id="country-select">
          <option value="">--Please Choose an Option--</option>
          <option value="USA">USA</option>
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
        <label>
          Enter your lucky number:
          <input type="text" name="luckyNum" />
        </label>
        <br></br>
        <label htmlFor="brewery-select">Select one of the words: </label>
        <select name="breweries" id="brewery-select">
          <option value="">--Please Choose an Option--</option>
          <option value="nano">nano</option>
          <option value="micro">micro</option>
          <option value="large">large</option>
        </select>
        <br></br>
        <button>Build my MASH!</button>
      </form>
    </div>
  )
}

export default MashEntry;