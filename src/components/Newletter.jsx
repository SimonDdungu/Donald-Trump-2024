import './Newletter.css'
import Mail_Icon from '../images/icons/blue mail icon.png'

const Newletter = () => {
    return <section className="Newsletter">
                <div className="Newsletter_container container">
                    <img src={Mail_Icon} alt="" />
                    <h1>Subscribe To Our Newsletter!</h1>
                    <p>Don't miss out on important news, in-depth analyses, and exclusive updates about Donald Trump and U.S. politics.<br/>
                        <span>Subscribe to our newsletter to receive the latest headlines, campaign updates, policy changes, and insights delivered straight to your inbox.<br /></span>
                        Whether you're following the latest policy changes, economic plans, or global relations, we've got you covered!</p>
                    <form className="Newsletter_form"action="#">
                        <input type="email" placeholder='Enter your email' required/>
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>
            </section>
}
export default Newletter;