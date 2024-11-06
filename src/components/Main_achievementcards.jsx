import './Main_achievementcards.css'
import USA_icon from '../images/icons/USA icon 2.png'

const Main_achievementcards = () => {
return <section className="Achievments_section">
    <div className="achievments_card_container">
        <div className="Each_achievement_card">
        <img src={USA_icon} alt="USA Flag" />
        <h4>47th President</h4>
        </div>
        <div className="Each_achievement_card">
        <i class="fa-solid fa-chart-line"></i>
        <h4>Unprecedented Economic Growth</h4>
        </div>
        <div className="Each_achievement_card">
        <i class="fa-solid fa-business-time"></i>
        <h4>Millions of Jobs Created</h4>
        </div>
        <div className="Each_achievement_card">
        <i class="fa-solid fa-sack-dollar"></i>
        <h4>Historic Tax Reform</h4>
        </div>
    </div>
</section>
}
export default Main_achievementcards;