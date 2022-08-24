const getScores = async (base, relative) => {
  const response = await fetch(`${base}${relative}`)
    .then((response) => response.json());
  return response.result;
};

const setScores = async (base, relative, data) => {
  const response = await fetch(`${base}${relative}`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return response;
};

module.exports = { getScores, setScores };
