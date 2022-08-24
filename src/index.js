import './main.css';
import Score from './modules/score.js';

const apiCalls = require('./modules/apiCall.js');
const updateDom = require('./modules/updateDom.js');

// api url
const baseurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const relativeurl = '/bmlDurY1wb3kTftOecfQ/scores';

// html element
const refresh = document.querySelector('button');
const submit = document.querySelector('#submit');

// on page load
updateDom(baseurl, relativeurl);

// on refresh
refresh.addEventListener('click', () => {
  updateDom(baseurl, relativeurl);
});

// on submit
submit.addEventListener('click', async () => {
  const user = document.querySelector('#name').value;
  const scoreValue = document.querySelector('#score').value;
  const userScore = new Score(user, scoreValue);
  await apiCalls.setScores(baseurl, relativeurl, JSON.stringify(userScore));
  updateDom(baseurl, relativeurl);
});
