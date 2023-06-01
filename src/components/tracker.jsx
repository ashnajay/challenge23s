/* eslint-disable guard-for-in */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import EventIcon from './eventIcon';
import EventDetails from './eventDetails';
import '../style.scss';

// const disasters = new Set();
// disasters.add('earthquakes');
// disasters.add('floods');
// disasters.add('landslides');
// disasters.add('volcanoes');
// disasters.add('wildfires');
// disasters.add('severeStorms');
// disasters.add('seaLakeIce');

function tracker(props) {
  const disasters = new Set();
  const [displayDetails, setDisplayDetails] = useState(null);

  useEffect(
    () => {
      if (props.earthquakes) {
        disasters.add('earthquakes');
      } else {
        disasters.delete('earthquakes');
      }
    },
    [props.earthquakes],
  );

  useEffect(
    () => {
      if (props.floods) {
        disasters.add('floods');
      } else {
        disasters.delete('floods');
      }
    },
    [props.floods],
  );

  useEffect(
    () => {
      if (props.landslides) {
        disasters.add('landslides');
      } else {
        disasters.delete('landslides');
      }
    },
    [props.landslides],
  );

  useEffect(
    () => {
      if (props.volcanoes) {
        disasters.add('volcanoes');
      } else {
        disasters.delete('volcanoes');
      }
    },
    [props.volcanoes],
  );

  useEffect(
    () => {
      if (props.wildfires) {
        disasters.add('wildfires');
      } else {
        disasters.delete('wildfires');
      }
    },
    [props.wildfires],
  );

  useEffect(
    () => {
      console.log(props.severeStorms);
      if (props.severeStorms) {
        disasters.add('severeStorms');
      } else {
        disasters.delete('severeStorms');
      }
    },
    [props.severeStorms],
  );

  useEffect(
    () => {
      console.log(props.seaLakeIce);
      if (props.seaLakeIce) {
        disasters.add('seaLakeIce');
      } else {
        disasters.delete('seaLakeIce');
      }
    },
    [props.seaLakeIce],
  );

  const markers = props.eventInfo.map((event, index) => {
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
          bootstrapURLKeys={{ key: 'API-KEY' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
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
