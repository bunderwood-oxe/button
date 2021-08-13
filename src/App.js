import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {

  const notificationsData = {
    "data": {
        "2": {
            "name": "Room 2",
            "type": "Call"
        }
    },
    "type": "call-buttons"
  }

  const url = 'https://simi01.us-east-1.simulator.oxehealth.systems/api/1/notifcations/'

  function callApi() {
    axios.post(url, {
      notificationsData
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={callApi}>Call Button</button>
      </header>
    </div>
  );
}

export default App;
