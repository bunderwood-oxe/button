import axios from 'axios'
import logo from './logo.png';
import './App.css';
import { useState } from 'react'

function App() {

  const [state, setState] = useState('');

  const notificationsData = (room, type) => ({
    "data": {
        [room]: {
            "name": room,
            "type": type
        }
    },
    "type": "call-buttons"
  })

  const url = 'https://simi01.us-east-1.simulator.oxehealth.systems/api/1/notifications/'

  async function callApi(room, type) {
    setState('loading')
    await axios.post(url, notificationsData(room, type))
    setState('')

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='room-name'>Room 7</div>
      <button className='button-call' onClick={() => callApi('Room 7', 'Call')}>Call</button>
      {/* <button className='button-reset' onClick={() => callApi('Room 7', 'reset')}>Reset</button> */}
      <hr/>
      <div className='room-name'>Room 8</div>
      <button disabled={state === 'loading'} className='button-call' onClick={() => callApi('Room 8', 'Call')}>Call</button>
      {/* <button className='button-reset' onClick={() => callApi('Room 8', 'reset')}>Reset</button> */}
    </div>
  );
}

export default App;
