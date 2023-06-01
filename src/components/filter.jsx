/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import '../style.scss';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import FilteredMultiSelect from 'react-filtered-multiselect';

function Filter(props) {
  let selectedTypes = props.eventTypes;
  const updateEventTypes = props.updateEventTypes;

  const options = [
    { value: 'earthquakes', text: 'Earthquakes' },
    { value: 'floods', text: 'Floods' },
    { value: 'landslides', text: 'Landslides' },
    { value: 'volcanoes', text: 'Volcanoes' },
    { value: 'wildfires', text: 'Wildfires' },
    { value: 'severeStorms', text: 'Severe Storms' },
    { value: 'seaLakeIce', text: 'Sea Lake Ice' },
  ];

  const onSelect = (selectedEvents) => {
    selectedTypes = selectedEvents;
    console.log('selected is ', selectedEvents);
    const eventTypes = [...props.eventTypes];
    eventTypes.splice(0, eventTypes.length, selectedEvents);
    console.log('eventTypes is ', eventTypes);
    updateEventTypes(eventTypes);
    console.log('updated event types');
    console.log('updated event types');
  };

  return (
    <div>
      <FilteredMultiSelect
        className="filter-container"
        onChange={onSelect}
        options={options}
        selectedOptions={selectedTypes}
      />
    </div>
  );
}

export default Filter;