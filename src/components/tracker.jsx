/* eslint-disable guard-for-in */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import GoogleMapReact from 'google-map-react';
import EventIcon from './eventIcon';
import EventDetails from './eventDetails';
import '../style.scss';

const disasters = new Set();
disasters.add('earthquakes');
disasters.add('floods');
disasters.add('landslides');
disasters.add('volcanoes');
disasters.add('wildfires');
disasters.add('severeStorms');
disasters.add('seaLakeIce');

function tracker({
  eventInfo, center, zoom,
}) {
  const [displayDetails, setDisplayDetails] = useState(null);

  const markers = eventInfo.map((event, index) => {
    if (disasters.has(event.categories[0].id)) {
      return (
        <EventIcon key={index}
          type={event.categories[0].id}
          lat={event.geometry[0].coordinates[1]}
          lng={event.geometry[0].coordinates[0]}
          onClick={() => setDisplayDetails({ id: event.id, title: event.title, source: event.sources[0].url })}
        />
      );
    }
    return null;
  });

  return (
    <div className="tracker-container">
      <div className="tracker">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'INSERT_API_KEY' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
        {displayDetails && <EventDetails info={displayDetails} />}
      </div>
    </div>
  );
}

tracker.defaultProps = {
  center: {
    lat: 43.7044,
    lng: -72.2887,
  },
  zoom: 5,
};

export default tracker;
