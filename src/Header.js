import './Header.css';
import logo from './Group 5167.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="options">
                    <div className="home">
                        <Link to = "/" style={{color:"black", fontWeight: "500", fontSize: "16px"}}>Monthly Bills</Link>
                    </div>
                    <div className="home">
                        <Link to = "/project" style={{color:"black", fontWeight: "500", fontSize: "16px"}}>Send for Approval</Link>
                    </div>
                    <div className="home">
                        <h1>Send to client</h1>
                    </div>
                    <div className="home">
                        <h1>Forecast</h1>
                    </div>
                    <div className="home">
                        <h1>Client Notification</h1>
                    </div>
                </div>

                <div className="profile">
                    <h1>Jenny Wilson</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Header;