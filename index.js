const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const { slack_name } = req.query;
  const track = "backend";
  const currentDay = moment().format('dddd');
  const currentUTCTime = moment().utc().format();

  const jsonResponse = {
    slack_name: slack_name || "Kelechi David",
    current_day: currentDay,
    utc_time: currentUTCTime,
    track,
    github_file_url: 'https://github.com/kelechidavid/stage-one-HNG-nodejs/blob/8ca461b535dfe67e3cb1ad341b67ae06f5d2bd2c/index.js', // Corrected GitHub file URL
    github_repo_url: 'https://github.com/kelechidavid/stage-one-HNG-nodejs.git', // Corrected GitHub repository URL
    status_code: 200,
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
