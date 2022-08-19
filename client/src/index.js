//
// made by fixedOtter on 17.8.2022
//

// imported modules
import counter from './libs/counter';
import createCards from './libs/createCards';
import Main from './components/Main';
import Header from './components/Header';
import './css/style.css';

fetch('/api/test') // pinging our backend server through the proxy defined on webpack.config
  .then(res => res.json())
  .then(res => console.log(res));


// function app() {
//   const state = {
//     title: 'title name',
//     body: 'handlebars can suck my whitespace',
//     other: 'I just rocked handlebars\' world',
//     logo: 'JD types too fast',
//     button: 'overdose on caffiene'
//   }

//   html = `${Header(state)} ${Main(state)}`;

//   document.body.innerHTML = html;
// }

// app();

createCards(['ichi', 'ni', 'san', 'yong', 'go']);

// counter(69);

if ('serviceWorker' in navigator && process.env.NODE_ENV == 'production') { // if we are in production, create a service worker
  navigator.serviceWorker
  .register('service-worker.js') // register service worker
  .then(register => console.log(register)); // logging it was registered
}

console.log('workds!');