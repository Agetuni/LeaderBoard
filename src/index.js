import './main.css';
import Score from './modules/score.js';

const apiCalls = require('./modules/apiCall.js');
const updateDom = require('./modules/updateDom.js');

// api url
const baseurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
// const relativeurl = '/bmlDurY1wb3kTftOecfQ/scores';
const relativeurl = '/08cilGce3trDO1HeA91I/scores';

// html element
const refresh = document.querySelector('button');
const submit = document.querySelector('#submit');

// on page load
updateDom(baseurl, relativeurl);

// on refresh
refresh.addEventListener('click', async () => {
  await updateDom(baseurl, relativeurl);
});

// on submit
submit.addEventListener('click', async () => {
  const user = document.querySelector('#name');
  const scoreValue = document.querySelector('#score');
  const userScore = new Score(user.value, scoreValue.value);
  await apiCalls.setScores(baseurl, relativeurl, JSON.stringify(userScore));
  await updateDom(baseurl, relativeurl);
  scoreValue.value = '';
  user.value = '';
});
