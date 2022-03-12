// import { NavLink, Link } from 'react-router-dom';

//styles and icons
import './Sidebar.css';
import PatriciaLogo from '../assets/patricia_logo.svg';
import ActivityIcon from '../assets/Activity.svg';
import CategoryIcon from '../assets/Category.svg';
import GiftIcon from '../assets/Mask.svg';
import ProductIcon from '../assets/Product.svg';
import WalletIcon from '../assets/Wallet.svg';
import HelpIcon from '../assets/help.svg';


export default function Sidebar() {
  return (
    <div className='sidebar'>
       
            <div className="logo">
                <img src={PatriciaLogo} alt="patricia logo" />
            </div>

            <nav className="links">
                <ul>
                    <li>
                        <a href="/">
                            <img src={CategoryIcon} alt="dashboard icon" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <img src={ActivityIcon} alt="activity icon" />
                            <span>Activity</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <img src={WalletIcon} alt="wallet icon" />
                            <span>Wallet</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <img src={ProductIcon} alt="product icon" />
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <img src={GiftIcon} alt="gift icon" />
                            <span>Referrals</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="help-center">
                <img src={HelpIcon} alt="gift icon" />
                <span>Help center</span>
            </div>
      
    </div>
  )
}
