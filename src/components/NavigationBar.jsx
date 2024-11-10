import { useState } from 'react';
import './NavigationBar.css';
import Logo from "../images/logo/Trump_2016.png";


const NavigationBar = () => {

const [isMenuActive, SetMenuActive] = useState(false);


return <section className="Navigation_Bar">
            <header className="Nav_Bar">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>

               
                    <ul className="Nav_items">
                        <li className="Nav_links active"><a href="#">Home</a></li>
                        <li className="Nav_links"><a href="#">About</a></li>
                        <li className="Nav_links"><a href="#">Service</a></li>
                        <li className="Nav_links"><a href="#">Events</a></li>
                        <li className="Nav_links"><a href="#">Gallery</a></li>
                        
                    </ul>
                

                <a className='Nav_btn' href="">Join us</a>

                <div className={`Hamburger_menu ${isMenuActive && "active"}`} onClick={() => SetMenuActive(!isMenuActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                    <ul className={`Mobile_Nav_items ${isMenuActive && "active"}`}>
                        <li className="Nav_links active"><a href="#">Home</a></li>
                        <li className="Nav_links"><a href="#">About</a></li>
                        <li className="Nav_links"><a href="#">Service</a></li>
                        <li className="Nav_links"><a href="#">Events</a></li>
                        <li className="Nav_links"><a href="#">Gallery</a></li>
                        <li className="Nav_links_Joinus"><a href="#">Join Us</a></li>
                    </ul>

            </header>
        </section>
}
export default NavigationBar;