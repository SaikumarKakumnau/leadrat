import { useState } from 'react';
import './index.css'

const StandardSeats = props => {
    const [isClick, setClick] = useState(false);
    const {seatDetails} = props;
    const {aRow, aSeat, bRow, bSeat, cRow, cSeat, dRow,dSeat} = seatDetails;

    const aSeatColor = aSeat === 'Booked'? 'seat-booked': 'seat-notbooked';
    const bSeatColor = bSeat === 'Booked'? 'seat-booked': 'seat-notbooked';
    const cSeatColor = cSeat === 'Booked'? 'seat-booked': 'seat-notbooked';
    const dSeatColor = dSeat === 'Booked'? 'seat-booked': 'seat-notbooked';

    const onSelectSeat = () => {
        setClick(({isClick: !isClick}))
    }

    const selectSeat = isClick ? 'selected-seat': "each-seat"

    return(
        <li className='list-type'>
            <div className='seat-row'>
                <button id={aRow} className={`${aSeatColor} ${selectSeat} ${selectSeat}`} onClick={onSelectSeat}>{aRow}</button>
                <button id={bRow} className={`${bSeatColor} ${selectSeat} ${selectSeat}`} onClick={onSelectSeat}>{bRow}</button>
                <button id={cRow} className={`${cSeatColor} ${selectSeat} ${selectSeat}`} onClick={onSelectSeat}>{cRow}</button>
                <button id={dRow} className={`${dSeatColor} ${selectSeat} ${selectSeat}`} onClick={onSelectSeat}>{dRow}</button>
            </div>
        </li>
    )
}

export default StandardSeats;