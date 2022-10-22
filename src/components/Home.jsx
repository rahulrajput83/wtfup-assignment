import '../App.css';
import Input from './Input';
import Filter from './Grid/Filter'
import Card from './Grid/Card';
import { useCallback, useEffect, useState } from 'react';

function Home(props) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  const [city, setCity] = useState('')
  const [data, setData] = useState({})
  const [url, setUrl] = useState('')

  useEffect(() => {
    props.setArr(data);
  }, [data, props])

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
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

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);
      setData(await res.json());
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    props.setArr(data.data);
  }, [data, props])

  useEffect(() => {
    if (location.latitude !== 0) {
      setUrl(`https://devapi.wtfup.me/gym/nearestgym?lat=${location.latitude}&long=${location.longitude}`)
      fetchData();
    }
  }, [location, url, fetchData])

  useEffect(() => {
    if (city !== '') {
      const str = city.toLowerCase().replace(' ', '+')
      setUrl(`https://devapi.wtfup.me/gym/nearestgym?lat=${location.latitude}&long=${location.longitude}&city=${str}`)
      fetchData();
    }
  }, [city, url, location, fetchData])

  return (
    <div className='container'>

      <Input getLocation={getLocation} />
      <div className='content'>
        <Filter city={city} setCity={setCity} />
        <div className='data'>
          {data.hasOwnProperty('data') ?

            data.data.map((item, index) => {
              return (
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