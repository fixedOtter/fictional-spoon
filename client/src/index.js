//
// made by fixedOtter on 17.8.2022
//

import counter from './libs/counter';
import createCards from './libs/createCards';
import Main from './components/Main';
import Header from './components/Header';
import './css/style.css';

function app() {
  const state = {
    title: 'title name',
    body: 'handlebars can suck my whitespace',
    other: 'I just rocked handlebars\' world',
    logo: 'JD types too fast',
    button: 'overdose on caffiene'
  }

  html = `${Header(state)} ${Main(state)}`;

  document.body.innerHTML = html;
}

app();

// createCards(['ichi', 'ni', 'san', 'yong', 'go']);

// counter(69);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(register => console.log(register));
}

console.log('workds!');