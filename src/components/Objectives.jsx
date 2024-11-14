import './Objectives.css'
import Objectives_Image from '../images/Objectives 4.jpg'

const Objectives = () => {
    return <section className="Objective_section">
                <div className="Objectives_container">
                    <div className="Objective_Image">
                        <img src={Objectives_Image} alt="" />
                    </div>

                    <div className="Objective_Content">
                        <h1 className='anton-sc-regular'>OUR <span className="red_text">OBJECTIVES</span></h1>
                        <ul>
                            <li className="Each_Objective">To focus on reviving the manufacturing sector and supporting rural economies, aiming to create jobs and boost GDP growth.</li>
                            <li className="Each_Objective">To continue expanding border policies and enforcing immigration reforms to control illegal immigration and enhance national security.</li>
                            <li className="Each_Objective">To propose changes to lower drug prices and improve access to affordable healthcare options.</li>
                            <li className="Each_Objective">To promote domestic energy production, focusing on fossil fuels while reducing reliance on foreign oil.</li>
                            <li className="Each_Objective">To confirm conservative judges to federal courts, including the Supreme Court, to influence U.S. legal landscape for decades.</li>
                        </ul>
                    </div>
                </div>
            </section>
}

export default Objectives;