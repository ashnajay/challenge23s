/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import '../style.scss';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import FilteredMultiSelect from 'react-filtered-multiselect';

const disasters = new Set();
disasters.add('earthquakes');
disasters.add('floods');
disasters.add('landslides');
disasters.add('volcanoes');
disasters.add('wildfires');
disasters.add('severeStorms');
disasters.add('seaLakeIce');

function Filter({ events, setEvents }) {
  setEvents(['earthquakes', 'floods', 'landslides', 'volcanoes', 'wildfires', 'severeStorms', 'seaLakeIce']);

  const onSelect = (selectedEvents) => {
    console.log(events);
    setEvents(selectedEvents);
  };

  const deselect = (index) => {
    const selectedEvents = events.selectedEvents.slice();
    selectedEvents.splice(index, 1);
    setEvents({ selectedEvents });
  };

  return (
    <div>
      <FilteredMultiSelect
        className="filter-container"
        onChange={onSelect}
        options={disasters}
        selectedOptions={events}
      />
      {events.length === 0 && <p className="filter-placeholder">Select...</p>}
      {events.length > 0 && (
      <ul>
        {events.map((event, i) => (
          <li key={event}>
            {`${event}`}
            <button type="button" onClick={() => deselect(i)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default Filter;