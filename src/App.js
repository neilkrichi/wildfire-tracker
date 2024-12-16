
import { useState, useEffect } from 'react'
import Map from './Components/Map'
import Loader from './Components/Loader'
import Header from './Components/Header'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const today = new Date().toISOString().split('T')[0];
      const lastWeek = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const lastMonth = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/events?start=${lastMonth}&end=${today}&category=wildfires`);

      const { events } = await res.json();

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
