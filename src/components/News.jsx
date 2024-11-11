import './News.css'
import NewsCard from './NewsCard'
import News1 from '../images/Elon must celebrating win of elections.jpg'
import News2 from '../images/Republicans gain back control 2.jpg'
import News3 from '../images/Trump supporters celebrating win results.jpg'
import News4 from '../images/trump wins election.jpg'
import News5 from '../images/Trump and South Korean Leader.jpg'
import News6 from '../images/Economy.jpg'
import News7 from '../images/Rural Americans.jpg'
import News8 from '../images/Tech Executives.png'
import { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import { easeIn } from 'framer-motion/dom'

const News = () => {

    const [View_more, setView_more] = useState(false);


    return <section className="News_section">
                <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0, transition:{duration: 0.8, ease: easeInOut}}}
                viewport={{once: true}}

                className="News_container">
                        <h1><span className="blue_text anton-sc-regular">LASTEST </span><span className="red_text anton-sc-regular">NEWS</span></h1>

                                <div className="News_Card_Container">

                                    <NewsCard 
                                    image = {News1}
                                    imagealt="Elon Musk celebrating Donal Trump win of elections"
                                    date="Nov 7, 2024"
                                    title="Trump's Social Media Influence"
                                    details="Key allies, including Elon Musk, played a significant role in boosting
                                    Trump's online presence. Musk's platform amplified pro-Trump content, especially
                                    targeting younger male voters."
                                    />

                                    <NewsCard 
                                    image = {News2}
                                    imagealt="Donaldo Trump and some of the reelected Republicans"
                                    date="Nov 7, 2024"
                                    title="Republicans Take Senate"
                                    details="Alongside Trump's victory, Republicans gained a Senate majority,
                                    expected to smooth the confirmation process for future Trump appointees."
                                    />


                                   <NewsCard 
                                    image = {News3}
                                    imagealt="Trump supporters celebrating victory"
                                    date="Nov 6, 2024"
                                    title="Post-Election Celebrations and Controversies"
                                    details="Trump's supporters celebrated his return to office with large gatherings
                                    across the U.S., though some events have drawn criticism over security concerns."
                                    />

                                    <NewsCard 
                                    image = {News4}
                                    imagealt="Trump with Son and Wife after being declared winner of Elections"
                                    date="Nov 5, 2024"
                                    title="Trump Wins 2024 Election"
                                    details="Donald Trump has been elected the 47th president of the U.S.,
                                             defeating Kamala Harris in a narrow race. His campaign saw significant support from influential
                                             figures and focused on economic issues impacting rural America."
                                    />

                                    

                                    

                                </div>

                                        <div className={`More_News ${View_more ? "active" : "hide"}`}>
                                                <NewsCard 
                                                image = {News5}
                                                imagealt="Trump and Kim Jong Un"
                                                date="Nov 9, 2024"
                                                title="Global Diplomacy Shift"
                                                details="South Korea has initiated diplomatic outreach toward Trump, aiming to
                                                strengthen military and economic ties amidst regional security concerns."
                                                />
                                                <NewsCard 
                                                image = {News6}
                                                imagealt="Currency Bills of various nations"
                                                date="Nov 10, 2024"
                                                title="Economic Plans for Rust Belt Revitalization"
                                                details="Trump has committed to policies aimed at reviving manufacturing in the
                                                Midwest. His proposed changes target job creation in economically struggling
                                                regions."
                                                />
                                                <NewsCard 
                                                image = {News7}
                                                imagealt="Rural Americans"
                                                date="Nov 11, 2024"
                                                title="Increased Focus on Rural America"
                                                details="Trump's campaign focused heavily on rural economic revitalization. His
                                                promises of job creation in deindustrialized regions helped secure key swing states."
                                                />
                                                <NewsCard 
                                                image = {News8}
                                                imagealt="Tech Executives that support Trump"
                                                date="Nov 12, 2024"
                                                title="Tech Executives' Support"
                                                details="Trump claims that multiple tech CEOs privately expressed support,
                                                despite publicly staying neutral. This has fueled debates about the role of tech in U.S.
                                                politics."
                                                />
                                        </div>

                                        <div className="News_View" onClick={() => {setView_more(!View_more)}}>View {View_more ? "Less" : "More"}</div>

                </motion.div>
            </section>
}
export default News;