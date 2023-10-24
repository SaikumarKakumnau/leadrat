import { Component } from 'react';
import {MdOutlineEventSeat} from 'react-icons/md';
import StandardSeats from './component/StandardSeats';
import PremiumSeats from './component/PremiumSeats';
import './App.css';

class App extends Component {
  state = { standardSeatsData: [], premiumSeatsData: [], seatsType: "Standard" }

  componentDidMount() {
    this.getStandardSeatsData();
    this.getPremiumSeatsData();
  }

  getStandardSeatsData = async () => {
    const response = await fetch("http://localhost:3001/standardseats/");
    const data = await response.json();
    console.log(data)

    const formatedData = data.map(eachItem => ({
      id: eachItem.id,
      aRow: eachItem.a_row,
      aSeat: eachItem.a_seat,
      bRow: eachItem.b_row,
      bSeat: eachItem.b_seat,
      cRow: eachItem.c_row,
      cSeat: eachItem.c_seat,
      dRow: eachItem.d_row,
      dSeat: eachItem.d_seat,
    }))

    this.setState({ standardSeatsData: formatedData })
  }

  getPremiumSeatsData = async () => {
    const response = await fetch("http://localhost:3001/premiumseats/");
    const data = await response.json();
    console.log(data)

    const formatedData = data.map(eachItem => ({
      id: eachItem.id,
      eRow: eachItem.e_row,
      eSeat: eachItem.e_seat,
      fRow: eachItem.f_row,
      fSeat: eachItem.f_seat,
    }))

    this.setState({ premiumSeatsData: formatedData })
  }

  onChangeSeatType = event => {
    this.setState({seatsType: event.target.value})
  }


  render() {
    const { standardSeatsData, premiumSeatsData, seatsType } = this.state
    return (
      <div className='book-my-seat-container'>
        <div className='header-container'>
          <div className='button-container'>
            <button className='selected-buttton'>6:00 PM</button>
            <button className='nonselected-button'>9:30 PM</button>
          </div>
          <div className='selection-seats'>
            <label className='label-element'>Select Type Of Seat</label>
            <select value={seatsType} onChange={this.onChangeSeatType}>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div className='ticket-count'>
            <label className='label-element'>No.Of Tickets</label>
            <select name="selectedTickets" className='select-element'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className='home-container'>
          <div className='app-container'>
            <h1 className='main-heading'>Book My Seat</h1>
            <div className='seats-container'>
              <ul className='premium-seats'>
                {premiumSeatsData.map(eachSeat => (
                  <PremiumSeats seatDetails={eachSeat} />
                ))}
              </ul>
              <ul className='standard-seats'>
                {standardSeatsData.map(eachSeat => (
                  <StandardSeats seatDetails={eachSeat} />
                ))}
              </ul>
            </div>
          </div>
          <div className='sidebar-container'>
            <div className='seat-visibility'>
              <button className='seat-selected'>
                <MdOutlineEventSeat className='seat-image'/>
              </button>
              <p>Your Selection</p>
            </div>
            <div className='seat-visibility'>
              <button className='seat-notavailable'>
                <MdOutlineEventSeat className='seat-image' />
              </button>
              <p>Not Available</p>
            </div>
            <div className='seat-visibility'>
              <button className='seat-available'>
                <MdOutlineEventSeat  className='seat-image'/>
              </button>
              <p>Available seats</p>
            </div>
          </div>
        </div>
        <div className='book-btn-container'>
          <button className='book-button'>Book Tickets</button>
        </div>
      </div>
    )
  }
}

export default App;
