import './Card.css'

function Card(props){
    console.log(props.card)

    let last4 = props.card.cardNumber.substring((props.card.cardNumber.length -4),
    props.card.cardNumber.length);

    return(
        <div id="card-container">
            <div id="card-header">
                something
            </div>
            <div id="card-details">
                <div>
                    Card number: xxx-xxxx-xxxx- {last4}
                </div>
                <div>
                    Expiration: {props.card.expirationDate}
                </div>
                <div>
                    CCV: {props.card.ccv}
                </div>
            </div>
        </div>
    );
}

export default Card;