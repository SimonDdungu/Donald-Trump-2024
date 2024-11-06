import './Main_about.css'
import Donald_fam from '../images/wallpaperflare.com_wallpaper.jpg'

const Main_about = () => {
    return <section className="Main_about_section">
        <div className="Main_aboutcontainer container">
            <div className="Main_about_pic">
                <img src={Donald_fam} alt="Donald Trump with Wife and Daughter" />
            </div>
            <div className="Main_about_TextContent">
                    <h1>WHO IS <span className="red_text">DONALD TRUMP</span>?</h1>
                    <p>Donald J. Trump, now serving as the <i>47th President of the United States</i>, 
                        is a leader known for his dedication to American values, economic growth, and national strength. 
                        <br />As a businessman and former 45th President, Trump has consistently championed policies that prioritize American interests, security, and prosperity. His return to the White House signifies a renewed commitment to protecting freedoms, enhancing economic opportunity, and preserving the values that define our nation. 
                        <br />President Trump's leadership continues to inspire millions, 
                        and his vision aims to secure a brighter future for all Americans.
                        </p>
                        <a href="#">Read More...</a>
            </div>
        </div>
    </section>
}
export default Main_about;