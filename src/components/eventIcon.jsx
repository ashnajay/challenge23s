/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { Icon } from '@iconify/react';
import earthquakeIcon from '@iconify/icons-openmoji/earthquake';
import floodIcon from '@iconify/icons-openmoji/flood';
import landslideIcon from '@iconify/icons-openmoji/landslide';
import volcanoIcon from '@iconify/icons-noto/volcano';
import fireIcon from '@iconify/icons-noto/fire';
import stormIcon from '@iconify/icons-noto-v1/cloud-with-rain';
import iceIcon from '@iconify/icons-noto/ice';

const iconMap = new Map();
iconMap.set('earthquakes', earthquakeIcon);
iconMap.set('floods', floodIcon);
iconMap.set('landslides', landslideIcon);
iconMap.set('volcanoes', volcanoIcon);
iconMap.set('wildfires', fireIcon);
iconMap.set('severeStorms', stormIcon);
iconMap.set('seaLakeIce', iceIcon);

const eventIcon = ({
  type, lat, lng, onClick,
}) => {
  return (
    <div className="event-icon" onClick={onClick}>
      <Icon icon={iconMap.get(type)} className="event-icon" />
    </div>
  );
};

export default eventIcon;
