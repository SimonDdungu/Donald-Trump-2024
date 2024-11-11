import './NewsCard.css'

const NewsCard = (card) => {
    return <div className="Each_card">

                <div className="NewsCard_Image">
                    <img src={card.image} alt={card.image_alt} />
                </div>

                <div className="NewsCard_TextContent">
                    <p className='Date red_text'>{card.date}</p>

                    <h4 className="blue_text">{card.title}</h4>

                    <hr />
                    
                    <p className="details">{card.details}</p>

                </div>
                

            </div>
}

export default NewsCard;