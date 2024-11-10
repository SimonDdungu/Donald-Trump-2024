import './Main_about.css'
import Donald_fam from '../images/wallpaperflare.com_wallpaper.jpg'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Main_about = () => {

const [Read, setRead] = useState(false);



    return <section className="Main_about_section">
        <motion.div 

        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y:0, transition: {duration: 1, ease: "easeInOut"}}}
        viewport={{once: true, amount: 0.1}}

        className="Main_aboutcontainer container">
            <div className="Main_about_pic">
                <img src={Donald_fam} alt="Donald Trump with Wife and Daughter" />
            </div>
            <div className="Main_about_TextContent">
                    <h1 style={{cursor: "pointer"}}><span className="blue_text anton-sc-regular">WHO IS </span><span className="red_text anton-sc-regular">DONALD TRUMP</span><span className="blue_text anton-sc-regular"> ?</span></h1>
                    <p>Donald J. Trump, now serving as the <i>47th President of the United States</i>, 
                        is a leader known for his dedication to American values, economic growth, and national strength. 
                        <br /><span className={`Main_about_hidetext ${Read && "active"}`}>As a businessman and former 45th President, Trump has consistently championed policies that prioritize American interests, security, and prosperity. His return to the White House signifies a renewed commitment to protecting freedoms, enhancing economic opportunity, and preserving the values that define our nation. 
                        <br />President Trump's leadership continues to inspire millions, 
                        and his vision aims to secure a brighter future for all Americans.</span>
                        </p>
                        <span className='AboutRead' onClick={() => {setRead(!Read)}}>Read {Read ? "Less" : "More..."}</span>
            </div>
        </motion.div>
    </section>
}
export default Main_about;