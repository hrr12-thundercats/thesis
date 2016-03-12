var helpers = require('./helpers');

var routes = [{
  path: '/habits',
  get: function (req, res) {
    // query db for user's habits
    helpers.getHabits(
      function (success) {
        res.json(success);
      },
      function (err) {
        console.error(err);
        res.sendStatus(400);
      });
  },
  post: function (req, res) {
    var habit = req.body;
    helpers.addHabit(habit,
      function (data) {
        res.status(201).send(data);
      },
      function (err) {
        console.error(err);
        res.sendStatus(400);
      });
  }
},
{
  path: '/habits/:habitid',
  post: function (req, res) {
    var habitid = req.params.habitid;
    helpers.createInstance(habitid,
      function (data) {
        res.status(201).send(data);
      },
      function (err) {
        console.error(err);
        res.status(400);
      });
  },
  put: function (req, res) {
    var habitid = req.params.habitid;
    var habitDetails = req.body;
    helpers.updateHabit(habitid, habitDetails, function (data) {
        res.status(200).send(data);
      },
      function (err) {
        console.error(err);
        res.sendStatus(400);
      });
  },
  delete: function (req, res) {
    var habitid = req.params.habitid;
    helpers.deleteHabit(habitid, function (data) {
      res.status(202).send(data);
    }, function (err) {
      console.error('Server error: ', err);
      res.sendStatus(500);
    });
  }
}];

module.exports = function (app, express) {
  routes.forEach(function (route) {
    for (var key in route) {
      if (key === 'path') {
        continue;
      }
      app[key](route.path, route[key]);
    }
  });
};