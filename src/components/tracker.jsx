/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import EventIcon from './eventIcon';
import EventDetails from './eventDetails';

const disasters = new Set();
disasters.add('earthquakes');
disasters.add('floods');
disasters.add('landslides');
disasters.add('volcanoes');
disasters.add('wildfires');
disasters.add('severeStorms');
disasters.add('seaLakeIce');

function tracker({ eventInfo, center, zoom }) {
  const [displayDetails, setDisplayDetails] = useState(null);

  const markers = eventInfo.map((ev, index) => {
    if (disasters.has(ev.categories[0].id)) {
      return (
        <EventIcon key={index}
          type={ev.categories[0].id}
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          onClick={() => setDisplayDetails({ id: ev.id, title: ev.title, source: ev.sources[0].url })}
        />
      );
    }
    return null;
  });

  return (
    <div className="tracker" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'API-KEY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {displayDetails && <EventDetails info={displayDetails} />}
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
