import './UpcomingCard.css'

const UcomingCard = (props) =>{

    return  <div className="Each_card">
                <div className="Upcoming_Date">
                    <h2 className='Date'>{props.date}</h2>
                    <h5 className='Month'>{props.month}</h5>
                </div>
                <div className="Upcoming_Content">

                    <div className="Upcoming_TextContent">
                        <h4 className="blue_text">{props.title}</h4>

                        <p>{props.details}</p>
                    </div>        
        
                    <div className="Upcoming_Image">
                        <img src={props.image} alt="" />
                    </div>

                </div>
            </div>
}

export default UcomingCard;