import './Main_Upcoming.css'
import { motion } from 'framer-motion'
import Image1 from '../images/cover/wallpaperflare.com_wallpaper (2).jpg'
import Image2 from '../images/qsi1y9rj.png'
import Image3 from '../images/PXL_20240914_025108834.MP_-2048x1536.jpg'
import UpcomingCard from './UpcomingCard'


const Main_Upcoming = () => {
    return <section className="Main_Upcoming">
                <motion.div 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0, transition: {duration: 1.2, ease: "easeInOut"}}}
                viewport={{once: true}}

                className="Main_Upcoming_content container">
                    <h1><span className="blue_text anton-sc-regular">UPCOMING </span><span className="red_text anton-sc-regular">CAMPAIGNS</span></h1>

                    <div className="UpcomingCamp_Card_container">

                        <UpcomingCard
                        date="20"  
                        month="Nov"
                        title="Freedom First: Missouri Rally" 
                        details="Trump will gather with Missouri supporters in a town hall-style event, discussing his vision for “America First” policies, job creation, and law enforcement. This event will highlight Trump's support."
                        image={Image1}/>



                        <UpcomingCard title="The Final Stretch: North Carolina Rally" 
                        date="28" 
                        month="Nov" 
                        details="Trump will host a major rally in North Carolina, energizing voters. His speech is expected to focus on economic growth and local issues critical to North Carolinians." 
                        image={Image2}/>

                        <UpcomingCard title="Economic Revival: Michigan Address" 
                        date="16" 
                        month="Dec" 
                        details="A rally targeting Pennsylvania voters with a focus on national defense and restoring traditional values. This event will highlight his plans to boost local industries." 
                        image={Image3}/>

                    </div>
                </motion.div>
            </section>
}
export default Main_Upcoming;