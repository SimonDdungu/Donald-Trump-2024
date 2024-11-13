import './preloader.css'
import preload_icon from '../images/preload usa flag.png'

const Preloader = () => {
    return <div className="preloader">
                <img src={preload_icon} alt="" />
                <p>Loading...</p>
            </div>
}
export default Preloader;