import { useState } from 'react';

//styles
import './CardTemplate.css';
import EyeIcon from "../assets/eye.svg";
import PatricaCard from "../assets/smallPatricia.svg";
import MasterCardIcon from "../assets/mastercard.svg";

export default function CardTemplate({card}) {
    const [isBlur, setIsBlur] = useState('true')
    
    const handleBlur = () =>{
        setIsBlur(!isBlur);
    }

    return (
    <div className='card-template'>
            <div 
                className={isBlur ? "cardone" : "blur"} 
                key={Math.random()} 
                style={
                    {backgroundImage: `url(${card.background})`, 
                    backgroundColor: `${card.bgcolor}`, 
                    color: `${card.color}`
                    }
                }>
                <div className="card-icons">
                    <img src={PatricaCard} alt="" />
                    <img className='eyeicon' onClick={handleBlur} src={EyeIcon} alt="" />
                </div>
                <div className="card-no">{card.cardno}</div>
                <div className="card-balance">
                    <small>BALANCE</small>
                    <p>{card.balance}</p>
                </div>
                <div className="card-holder">
                    <p>{card.name}</p>
                    <div className="card-valid">
                        <div className="card-valid-thru"><small>VALID <br/> THRU</small></div>
                        <p>{card.valid}</p>
                    </div>
                    <div className="card-cvv">
                        <span>CVV</span>
                        <span>...</span>
                    </div>
                    <div className="symbol">
                        <img src={MasterCardIcon} alt="" />
                    </div>
                </div>
            </div>
    </div>
  )
}


