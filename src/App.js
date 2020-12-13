
import { useState, useEffect } from 'react'
import Map from './Components/Map'
import Loader from './Components/Loader'
import Header from './Components/Header'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div className="App">
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
