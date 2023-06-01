# Natural Event Tracker

Using NASA's API and Google Maps API to locate different events occuring in the natural world across the globe to help people easily visualize what is happening at a larger scale and detect patterns around them in an interactive way.

## Data:

Using EONET data, the app fetches instances of earthquakes, floods, landslides, volcanoes, wildfires, severe storms, and icebergs on a map, demarcated by their respective icons on the map. (Note: There are some event types such as floods that have no reported instances by NASA currently, so they don't appear on the map.)

## Usage:

Clone and use `npm run dev` to test locally.

**You must create your own Google Maps API key to test** (I tried providing mine in a .env in order to deploy it, but had some configuration
issues that were difficult to resolve.)

## Framework:

React.js
