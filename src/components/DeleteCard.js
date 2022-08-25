import { useState } from 'react';

//styles
import './DeleteCard.css';

//icon
import caret from '../assets/caret.svg';
import close from '../assets/close.svg';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard } from '../redux/cardSlice';

export default function DeleteCard({setDeleteModal}) {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const [cardid, setCardId] = useState("")

  const handleDelete = (cardid) => {
    dispatch(deleteCard({id: cardid}))
    setDeleteModal(false)
  }

  console.log(">>>id", cardid)
  console.log("<<<", Date.now())

  return (
    <div className='deletecard'>
        <div className="deletecard-content">
            <div className="deletecard-content-close">
            <h2>Delete Card</h2>
            <img src={close} alt="close" onClick={() => setDeleteModal(false)}/>
            </div>
            <div className="deletecard-container">
                <p>Select card</p>
                <div className='deletecard-form'>
                    <div className="input_container">
                        <select
                          required
                          value={cardid}
                          onChange={(e) => setCardId(e.target.value)}
                        >
                            <option value="" disabled>Select Card Name</option>
                            {card.map(card => (
                                <option value={card.id} key={card.id}>{card.name}</option>
                            ))}
                        </select>
                        <img src={caret} alt="" /> 
                    </div>
                    <button onClick={() => handleDelete(cardid)}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}
