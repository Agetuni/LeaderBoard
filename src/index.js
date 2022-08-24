import './main.css';
import Score from './modules/score.js';

const apiCalls = require('./modules/apiCall.js');
const updateDom = require('./modules/updateDom.js');

const baseurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const relativeurl = '/bmlDurY1wb3kTftOecfQ/scores';
const refresh = document.querySelector('button');
const submit = document.querySelector('#submit');
updateDom(baseurl, relativeurl);

refresh.addEventListener('click', () => {
  updateDom(baseurl, relativeurl);
});
submit.addEventListener('click', () => {
  const user = document.querySelector('#name').value;
  const scoreValue = document.querySelector('#score').value;
  const userScore = new Score(user, scoreValue);
  apiCalls.setScores(baseurl, relativeurl, JSON.stringify(userScore));
  updateDom(baseurl, relativeurl);
});
