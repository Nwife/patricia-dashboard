//styles and icons
import './Cards.css';
import LeftIcon from "../assets/left.svg";
import PhotoIcon from "../assets/photo.svg";
import DownIcon from "../assets/dropdown.svg";
import CardOne from "../assets/cardone.svg";
import CardTwo from "../assets/card2.png";

export default function Cards() {
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
            {/* <div><img src={CardOne} alt="" /></div> */}
            <div><img src={CardTwo} alt="" /></div>
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
    