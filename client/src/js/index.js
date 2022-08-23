//
// made by fixedOtter on 17.8.2022
//

// imported modules
import './css/style.css';
import db from '../db';

db.init()
  .then(async(data) => {
    // console.log(`db setup ${data}`); // console logging the data from the database
    // const itemIndex = await db.makeMuffin({ // awaiting the make muffin function
    //   muffinName: 'chocolate chip' // passing in this data to be added to the db
    // });

    // console.log(itemIndex);

    const muffins = await db.find();
    console.log(muffins);

  })
  .catch((err) => console.error(err));



if ('serviceWorker' in navigator && process.env.NODE_ENV == 'production') { // if we are in production, create a service worker
  navigator.serviceWorker
  .register('service-worker.js') // register service worker
  .then(register => console.log(register)); // logging it was registered
}

console.log('workds!');