import { openDB, deleteDB, wrap, unwrap } from 'idb';

export default {
  // initialize the database
  init () {
    return openDB('muffins', 1, { // opening the muffin database version one
      upgrade(db) { // if the muffin db version isn't found
        console.log('muffins baked'); // testing to see when the db is initially created
        db.createObjectStore('muffins', {keyPath: 'muffinID', autoIncrement: true}); // essentially created a mini schema for our db
      }
    });
  },

  // muffin making method
  async makeMuffin(data) { // recieving data that we can grab muffin info from
    const muffinDB = await openDB('muffins', 1); // grabbing and awaiting the muffin db
    const transaction = muffinDB.transaction('muffins', 'readwrite'); // defining the connection, with readwrite permissions
    const store = transaction.objectStore('muffins'); // grabbing the objectStore from the transaction, to perform requests on the db

    return await store.add({muffin: data})
  },

  // finding an item in the db
  async find() {
    const muffinDB = await openDB('muffins', 1); // grabbing and awaiting the muffin db
    const transaction = muffinDB.transaction('muffins', 'readwrite'); // defining the connection, with readwrite permissions
    const store = transaction.objectStore('muffins'); // grabbing the objectStore from the transaction, to perform requests on the db


    return await store.getAll();

  }
}