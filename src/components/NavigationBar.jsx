
import './NavigationBar.css';
import Logo from "../images/logo/Trump_2016.png";

const NavigationBar = () => {
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
            </header>
        </section>
}
export default NavigationBar;