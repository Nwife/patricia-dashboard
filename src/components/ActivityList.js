//styles & icons
import './ActivityList.css';
import CalendarIcon from '../assets/Calendar.svg';
import DownloadIcon from '../assets/Download.svg'

export default function ActivityList({ company }) {
  return (
    <div className='activity-list'>
        <div className="recent-activity">
            <p>Recent Activity</p>
            <div className="date">
                <img src={CalendarIcon} alt="" />
                <span>Start date: 01/02/21</span>
            </div>
            <img src={DownloadIcon} alt="" />
        </div>
        <div className="list">
            {company.map(com => (
                <div className='activity-company' key={Math.random()}>
                    <div className='activity-name'>
                        <img src={`/companylogo/${com.img}`} alt="" />
                        <div>
                            <p className='name'>{com.name}</p>
                            <p className='time'>{com.time}</p>
                        </div>
                    </div>
                    <div className="price">{com.price}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
