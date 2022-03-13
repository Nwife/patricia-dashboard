import { useState } from 'react';
import CardTemplate from './CardTemplate'
//styles and icons
import './Cards.css';
import LeftIcon from "../assets/left.svg";
import PhotoIcon from "../assets/photo.svg";
import DownIcon from "../assets/dropdown.svg";


export default function Cards() {
  const [card, useCard] = useState([
    { cardno: '7545 7545 7545 7545', balance: '$2000', name: 'Amaeze Ife', valid: '10/12', bgcolor: '#1d1e2c', color: '#fff', background: '/card/card-bg.svg' },
    { cardno: '4111 9854 9484 7439', balance: '$9800', name: 'Amaeze Izu', valid: '04/21', bgcolor: '#DEF5F2', color: '#000', background: '/card/card-bgtwo.svg'},
    { cardno: '1653 7098 7839 0922', balance: '$1372.98', name: 'Patrcia Boy', valid: '10/12', bgcolor: '#1d1e2c', color: '#fff', background: '/card/card-bg.svg' },
    { cardno: '4111 9854 9484 7439', balance: '$400', name: 'Good Kid', valid: '04/21', bgcolor: '#DEF5F2', color: '#000', background: '/card/card-bgtwo.svg'}
  ])

  return (
    <div className='cards'>
      <div className="cards-title">
        <img src={LeftIcon} alt="" />
        <span>Cards</span>
      </div>
      <div className="card-content">
        <div className="v-card">
          <div className="v-text">
            <div><img src={PhotoIcon} alt="icon" /></div>
            <div className='v-text-wrap'>
              <div className='v-text-content'><p>Virtual Card</p><img src={DownIcon} alt="" /></div>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="card-btn">
            <button>Create New Card</button>
          </div>
        </div>

        <div className="cards-slider">
          <div className="cards-slider-wrap">
            {card.map(card => (
              <CardTemplate card={card} key={Math.random()}/>
            ))}
          </div>
          <div className="cards-slider-btn">
            <button>Freeze Card</button>
            <button>Delete Card</button>
          </div>
        </div>

        <div className="card-info">
          <div className="card-info-wrap"> 
            <ul>
              <li>Card Balance:</li>
              <li>Name:</li>
              <li>Card Status:</li>
              <li>Billing Address:</li>
              <li>Date Created:</li>
            </ul> 
            <ul>
              <li>$3000.73</li>
              <li>Netflix Card</li>
              <li>Active</li>
              <li>Patricia HQ, SA 109827</li>
              <li>March 3rd 2020, 9:48:36 am</li>
            </ul>
            <ul className='card-info-last'>
              <li><button>Fund Card</button></li>
            </ul>
          </div>
        </div>
      </div>

      

    </div>
  )
}
    