import './main.css';
import Score from './modules/score.js';

const apiCalls = require('./modules/apiCall.js');
const updateDom = require('./modules/updateDom.js');

// api url
const baseurl = 'http://api.dev.evisa.gov.et/identity-server';
// const relativeurl = '/bmlDurY1wb3kTftOecfQ/scores';
const relativeurl = '/api/v1.0/client/Create';

// html element
const refresh = document.querySelector('button');
const submit = document.querySelector('#submit');

// on page load
//updateDom(baseurl, relativeurl);

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
 // await updateDom(baseurl, relativeurl);
  scoreValue.value = '';
  user.value = '';
});
