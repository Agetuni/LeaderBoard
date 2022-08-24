const apiCalls = require('./apiCall.js');

const displayScore = async (baseurl, relativeurl) => {
  const scores = await apiCalls.getScores(baseurl, relativeurl);
  const table = document.querySelector('table');
  let scoreHtml = '';
  scores.forEach((element) => {
    scoreHtml += ` <tr>
        <td>${element.user} : ${element.score}</td>
    </tr>`;
  });
  table.innerHTML = scoreHtml;
};

module.exports = displayScore;