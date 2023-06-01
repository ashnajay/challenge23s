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

const App = () => {
  const [fetching, setFetching] = useState(true);
  const [eventInfo, setEventInfo] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();

      setFetching(false);
      setEventInfo(events);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <h1>Natural Event Tracker</h1>
      <div className="banner-container">
        <div className="banner">
          <h2>POWERED BY NASA EONET AND GOOGLE MAPS</h2>
        </div>
      </div>
      <div>
        {fetching ? <Loading /> : <Tracker eventInfo={eventInfo} />}
      </div>
    </>
  );
};

export default App;