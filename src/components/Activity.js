import { useState } from 'react';

//styles & icons
import './Activity.css';
import ProfilePic from '../assets/profile.png';
import NotificationIcon from '../assets/notification.svg';
import DotIcon from '../assets/dot.svg';

//components
import ActivityList from './ActivityList';

export default function Activity() {
  const [company, setCompany] = useState([
    { img: 'amazon.svg', name: 'Amazon', time: 'Just now', price: '$377.23' },
    { img: 'nike.svg', name: 'Nike', time: 'Today', price: '$873,873,834.3' },
    { img: 'starbucks.svg', name: 'Starbucks', time: 'Yesterday', price: '$237,737.55' },
    { img: 'netflix.svg', name: 'Netflix', time: 'June 17', price: '$599' },
    { img: 'apple.svg', name: 'Apple', time: 'June 15', price: '$872' },
    { img: 'starbucks.svg', name: 'Starbucks', time: 'June 13', price: '$244.55' },
    { img: 'nike.svg', name: 'Nike', time: 'June 11', price: '$452' },
    { img: 'appletwo.svg', name: 'Apple', time: 'June 09', price: '$990' }
])

  return (
    <div className='activity'>
      <div className="activity-icon">
        <img src={NotificationIcon} alt="" />
        <img src={ProfilePic} alt="" />
        <img src={DotIcon} alt="" />
      </div>

      <ActivityList company={company}/>
    </div>
  )
}
