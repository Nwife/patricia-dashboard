// import { NavLink, Link } from 'react-router-dom';

//styles and icons
import './Sidebar.css';
import PatriciaLogo from '../assets/patricia_logo.svg';
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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="/sprite.svg#category"></use>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="/sprite.svg#activity"></use>
                            </svg>
                            <span>Activity</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            {/* <img src={WalletIcon} alt="wallet icon" /> */}
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="/sprite.svg#wallet"></use>
                            </svg>
                            <span>Wallet</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <svg width="18" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="/sprite.svg#product"></use>
                            </svg>
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            {/* <img src={GiftIcon} alt="gift icon" /> */}
                            <svg width="18" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref="/sprite.svg#gift"></use>
                            </svg>
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
