const router = require("express").Router();
const { Parser } = require('@json2csv/plainjs');
const fs = require('fs');

module.exports = db => {
  router.get("/users", (request, response) => {
    db.query(`
      SELECT * from users
      ORDER BY id DESC
      LIMIT 1;
    `).then(({ rows: users }) => {
      response.json(users);
    });
  });

  router.post("/users", (request, response) => {
    const { isFemale, age } = request.body;

    db.query(`
      INSERT INTO users (is_female, age) VALUES ($1::boolean, $2::integer)
    `,
      [isFemale, age]
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  router.post("/users:id", (request, response) => {
    const { userId, trialId, bait1, bait2, bait3, baitChoice, isPositive, hasReward, trial} = request.body;

    db.query(`
      INSERT INTO user_trial (user_id, trial_id, bait_1, bait_2, bait_3, bait_choice, is_positive, has_reward, trial) VALUES ($1::integer, $2::integer, $3::integer, $4::integer, $5::integer, $6::integer, $7::boolean, $8::boolean, $9::integer)
    `,
      [userId, trialId, bait1, bait2, bait3, baitChoice, isPositive, hasReward, trial]
    ).then(({ rows: users }) => {
      response.json(users);
    }).catch(err => {
      console.error('Error adding data', err);
      response.status(500).json({error: 'unable to add the data'})
    });
  });

  router.get("/users/user_trial", (request, response) => {
    const userId = request.query.userId;
    console.log(userId);

    db.query(`
      SELECT
      trial,
      user_id,
      users.is_female,
      users.age,
      b1.name AS bait_1,
      b2.name AS bait_2,
      b3.name AS bait_3,
      b4.name AS bait_choice,
      is_positive,
      has_reward,
      trial_id,
      trials.session
      FROM user_trial
      JOIN users ON user_trial.user_id = users.id
      JOIN baits b1 ON user_trial.bait_1 = b1.id
      JOIN baits b2 ON user_trial.bait_2 = b2.id
      JOIN baits b3 ON user_trial.bait_3 = b3.id
      JOIN baits b4 ON user_trial.bait_choice = b4.id
      JOIN trials ON user_trial.trial_id = trials.id
      WHERE user_id = ${userId};
    `).then(({ rows: user_trial }) => {
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(user_trial);

      fs.writeFile(`../trials/user${userId}.csv`, csv, (err) => {
        if (err) {
          console.error('Error writing CSV file:', err);
          response.status(500).json({ error: 'Failed to save CSV data' });
        } else {
          console.log('CSV file successfully saved as user_trial_data.csv');
          // Send the CSV data as the response
          response.header('Content-Type', 'text/csv');
          response.attachment('user_trial_data.csv');
          response.send(csv);
        }
      });
    });
  });

  return router;
};

