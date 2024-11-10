import './Hero.css'

const Hero = () => {
    return <section className="Hero_section">
                <div className="Hero_page">
                    <div className="overlay"></div>
                    <div className="Hero_Content">
                        <h1 className='anton-sc-regular'><span className="hero_blue_text">America </span><span className="red_text">Triumphant</span>: Celebrating President Donald J. Trump's 2024 Victory!</h1>
                        <p>Join us in honoring a historic victory! Together, we've made our voices heard, reigniting the American spirit 
                            and paving the way for renewed strength, prosperity, and freedom. <span className="Hero_hide_paragraph">
                            Donald J. Trump returns to lead with a vision to empower citizens, uphold our traditions, and drive our nation forward. 
                            This is more than an election win
                        <br />it's a new chapter for America. </span>
                        </p>
                        <a className="Hero_btn"href="#">Join us</a>
                    </div>
                </div>
            </section>
}
export default Hero;