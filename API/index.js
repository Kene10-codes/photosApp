// 8A4wERERlXda6DIKdXdDAlM2eBAlciwoqp4y4j-oz6I  //ACCESS KEY
// qWU-Ybqvgsd3-UlJ4-oJAy-Mvq2_NyneWItNzx1NSp8 // SECRET KEY

import {API_URL, ACCESS_KEY} from '../constants';

export const getAllPhotos = async () => {
  try {
    fetch (API_URL, {
      method: 'GET',
      headers: new Headers ({
        Authorization: `${ACCESS_KEY}`,
        'Content-Type': 'application/json',
      }),
    })
      .then (response => response.json ())
      .then (data => console.log (data + '>>>>>'))
      .catch (error => console.error (error))
      .finally (() => setLoading (false));
  } catch (err) {
    console.log (err);
  }
};
