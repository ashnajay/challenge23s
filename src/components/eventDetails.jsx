/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

const eventDetails = ({ info }) => {
  return (
    <div className="event-details">
      <h2>Event Details</h2>
      <ul>
        <li>EONET ID: <strong>{ info.id }</strong></li>
        <li>Name: <strong>{ info.title }</strong></li>
        <li>Source: <strong><a href={info.source} target="_blank" rel="noreferrer">{info.source}</a></strong></li>
      </ul>
    </div>
  );
};

export default eventDetails;
