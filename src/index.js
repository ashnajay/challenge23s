import $ from 'jquery';
import './style.scss';

let count = 0;
setInterval(() => {
  count += 1;
  $('#main').html('You have been on this page for ' + count + ' seconds');
}, 1000);
