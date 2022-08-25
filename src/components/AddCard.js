import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/cardSlice'
//styles
import './AddCard.css';

//icons
import caret from '../assets/caret.svg';
import close from '../assets/close.svg';

export default function AddCard({setCardModal}) {
  const dispatch = useDispatch()
  const [cardno, setCardNo] = useState('')
  const [color, setColor] = useState('')
  const [balance, setBalance] = useState('')
  const [name, setName] = useState('')
  const [valid, setValid] = useState('')
  const [background, setBackground] = useState('')
  const [bgcolor, setbgColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCard({
        cardno: cardno,
        balance: balance,
        name: name,
        valid: valid,
        bgcolor: bgcolor,
        color: color,
        background: background
    }))

    setCardModal(false)
  }
 
  return (
    <div className='addcard'>
        <div className="addcard-content">
            <div className='addcard-content-close'>
            <h2>Add Card</h2>
            <img src={close} alt="close" onClick={() => setCardModal(false)}/>
            </div>
            <form className='addcard-form' onSubmit={handleSubmit}>
                <div className="input-contain">
                    <label>
                        <span>Card no:</span>
                        <input 
                        value={cardno}
                        onChange={(e) => {
                          if(e.target.value.length === 17) return false;
                          setCardNo(e?.target.value);
                        }}
                        type="number"
                        placeholder='0000 0000 0000 0000'
                        />
                    </label>
                    <label>
                        <span>Card name:</span>
                        <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder='Nwife Ironside'
                        />
                    </label>
                </div>
                <div className="input-contain">
                    <label>
                        <span>Card balance:</span>
                        <input 
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        type="number"
                        placeholder='1004.00'
                        />
                    </label>
                    <label>
                        <span>Expiry date:</span>
                        <input 
                        value={valid}
                        onChange={(e) => setValid(e.target.value)}
                        type="text"
                        placeholder='10/24'
                        />
                    </label>
                </div>
                <div className="input-contain">
                    <label>
                        <span>Card text-color:</span>
                        <div className="input_container">
                            <select 
                              required
                              value={color}
                              onChange={(e) => setColor(e.target.value)}
                            >
                                <option value="" disabled>choose a text-color</option>
                                <option value="#fff">white</option>
                                <option value="#000">black</option>
                            </select>
                            <img src={caret} alt="" />
                        </div>
                    </label>
                    <label>
                        <span>Card design:</span>
                        <div className="input_container">
                            <select 
                              required
                              value={background}
                              onChange={(e) => setBackground(e.target.value)}
                            >   <option value="" disabled>choose a card design</option>
                                <option value="/card/card-bg.svg">greenknight</option>
                                <option value="/card/card-bgtwo.svg">darkside</option>
                            </select>
                            <img src={caret} alt="" />
                        </div>
                    </label>
                </div>
                <label>
                    <span>Card bg-color:</span>
                    <div className="input_container">
                        <select 
                            id='bg-color'
                            required
                            value={bgcolor}
                            onChange={(e) => setbgColor(e.target.value)}
                        >  
                             <option value="" disabled>choose a card background color</option>
                            <option value="#1d1e2c">black-ish</option>
                            <option value="#DEF5F2">green-ish</option>
                        </select>
                        <img src={caret} alt="" />
                    </div>
                </label>
                <button>Add Card</button>
            </form>
        </div>
    </div>
  )
}
