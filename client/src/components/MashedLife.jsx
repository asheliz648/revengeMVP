import React from 'react';
import '../css/MashedLife.css'


const MashedLife = (props) => {
  let livingImage = '';
  switch (props.response.houseRes) {
    case 'mansion':
      livingImage = 'https://i.pinimg.com/564x/ae/6f/ac/ae6fac72fd18b901ef70682f66c6a800.jpg'
      break;
    case 'shack':
      livingImage = 'https://cdn.vox-cdn.com/thumbor/PYO34qy2Rn6Tu2dPyF7X57T3p6w=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19499595/small_storage_xl.jpg'
      break;
    case 'house':
      livingImage = 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      break;
    case 'townhouse':
      livingImage = 'https://www.upnest.com/1/post/files/2021/03/bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg'
      break;
    case 'condo':
      livingImage = 'https://www.seattlebusinessmag.com/sites/default/files/field/image/1--C5-0701-Final.jpg'
      break;
    case 'farm/ranch':
      livingImage = 'https://k48b9e9840-flywheel.netdna-ssl.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg';
    case 'island':
      livingImage = 'https://robbreport.com/wp-content/uploads/2020/04/wheelers-2.jpg?w=1000'
      break;
    default:
      livingImage = 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2404,w_1600,x_0,y_0/c_limit,f_auto,fl_lossy,q_80,w_1080/treehouse_090810_196_fpjsf4.jpg'
  }

  const handlePlayAgain = (e) => {
    location.reload();
  }

  return(
    <div className="mashedLifeHolder">
      <h2 className="sectionHeader">Your living situation: </h2>
      <img className="house" src={livingImage}/>
      <br></br>
      <h2 className="sectionHeader">About You: </h2>
      <ul>
        <li className="lifeHolder">
          <h3 className="lifeHeader">Your favorite drink: </h3>
          <p className="lifeFacts">{props.response.cocktail}</p>
        </li>
        <li className="lifeHolder">
          <h3 className="lifeHeader">The joke your known for: </h3>
          <p className="lifeFacts">{props.response.joke}</p>
        </li>
        <li className="lifeHolder">
          <h3 className="lifeHeader">The university your kid goes to: </h3>
          <p className="lifeFacts">{props.response.university}</p>
        </li>
        <li className="lifeHolder">
          <h3 className="lifeHeader">The brewery you're a regular at: </h3>
          <p className="lifeFacts">{props.response.brewery}</p>
        </li>
      </ul>
      <button className="mashBtn" onClick={handlePlayAgain}>Play Again!</button>
    </div>
  )

}

export default MashedLife;