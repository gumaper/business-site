import magnificPopup from 'magnific-popup';
import $ from 'jquery';


$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

export default Work;