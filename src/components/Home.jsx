/* Imports */
import '../App.css';
import Input from './Input';
import Filter from './Grid/Filter'
import Card from './Grid/Card';
import { useCallback, useEffect, useState } from 'react';

/* Home functional component */
function Home(props) {
  /* useState for location */
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  /* useState for city name */
  const [city, setCity] = useState('')
  /* useState for data */
  const [data, setData] = useState({})
  /* useState for url fetch calls */
  const [url, setUrl] = useState('')


  /* function triggers when location icon is clicked. */
  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
      /* on getting latitude and longitude then save to location useState.  */
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, () => {
        console.log('Unable to retrieve your location');
      });
    }
  }

  /* useCallback to fetch data on url useState changes */
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);
      setData(await res.json());
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  /* useEffect triggers when data or props changes */
  useEffect(() => {
    props.setArr(data.data);
  }, [data, props])

  /* useEffect when location changes */
  useEffect(() => {
    if (location.latitude !== 0) {
      setUrl(`https://devapi.wtfup.me/gym/nearestgym?lat=${location.latitude}&long=${location.longitude}`)
      fetchData();
    }
  }, [location, url, fetchData])

  /* useEffect when city updates */
  useEffect(() => {
    if (city !== '') {
      const str = city.toLowerCase().replace(' ', '+')
      setUrl(`https://devapi.wtfup.me/gym/nearestgym?lat=${location.latitude}&long=${location.longitude}&city=${str}`)
      fetchData();
    }
  }, [city, url, location, fetchData])

  /* function to reset filter */
  const handleReset = () => {
    setCity('');
    setUrl(`https://devapi.wtfup.me/gym/nearestgym?lat=${location.latitude}&long=${location.longitude}`)
  }

  /* Return */
  return (
    <div className='container'>
      {/* Renders Input Component with props */}
      <Input getLocation={getLocation} />
      <div className='content'>
        {/* Renders Filter Component  with props */}
        <Filter handleReset={handleReset} city={city} setCity={setCity} />
        <div className='data'>
          {data.hasOwnProperty('data') ?
            /* Map function */
            data.data.map((item, index) => {
              return (
                /* Renders Card Component with props */
                <Card key={`card-${index}`} item={item} />
              )
            })

            :

            null}
        </div>
      </div>
    </div>
  );
}

export default Home;