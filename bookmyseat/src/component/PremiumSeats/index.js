import './index.css'

const PremiumSeats = props => {
    const {seatDetails} = props;
    const {eRow, eSeat, fRow, fSeat} = seatDetails;

    const eSeatColor = eSeat === 'Booked'? 'seat-booked': 'seat-notbooked';
    const fSeatColor = fSeat === 'Booked'? 'seat-booked': 'seat-notbooked';

    return(
        <li className='list-type'>
            <div className='seat-row'>
                <button id={eRow} className={`${eSeatColor} each-seat`}>{eRow}</button>
                <button id={fRow} className={`${fSeatColor} each-seat`}>{fRow}</button>
            </div>
        </li>
    )
}

export default PremiumSeats;