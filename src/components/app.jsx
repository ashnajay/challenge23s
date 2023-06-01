/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable object-curly-newline */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect } from 'react';
import Tracker from './tracker';
import Loading from './loading';
import '../style.scss';
import Filter from './filter';

const App = () => {
  const [fetching, setFetching] = useState(true);
  const [eventInfo, setEventInfo] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  console.log('eventTypes is ', eventTypes);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();

      setFetching(false);
      setEventInfo(events);
    };

    fetchEvents();
  }, []);

  const updateEventTypes = (types) => {
    console.log(types);
    setEventTypes([...types]);
  };

  return (
    <>
      <h1>Natural Event Tracker</h1>
      <div className="banner-container">
        <div className="banner">
          <h2>POWERED BY NASA EONET AND GOOGLE MAPS</h2>
        </div>
      </div>
      <Filter placeholder="Select..." eventTypes={eventTypes} updateEventTypes={updateEventTypes} />
      <div>
        {fetching ? <Loading /> : (
          <Tracker
            key={eventTypes}
            eventInfo={eventInfo}
            earthquakes={eventTypes.includes('earthquakes')}
            floods={eventTypes.includes('floods')}
            landslides={eventTypes.includes('landslides')}
            volcanoes={eventTypes.includes('volcanoes')}
            wildfires={eventTypes.includes('wildfires')}
            severeStorms={eventTypes.includes('severeStorms')}
            seaLakeIce={eventTypes.includes('seaLakeIce')}
          />
        )}
      </div>
    </>
  );
};

export default App;