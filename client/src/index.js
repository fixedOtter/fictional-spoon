//
// made by fixedOtter on 17.8.2022
//

// imported modules
import './css/style.css';




if ('serviceWorker' in navigator && process.env.NODE_ENV == 'production') { // if we are in production, create a service worker
  navigator.serviceWorker
  .register('service-worker.js') // register service worker
  .then(register => console.log(register)); // logging it was registered
}

console.log('workds!');