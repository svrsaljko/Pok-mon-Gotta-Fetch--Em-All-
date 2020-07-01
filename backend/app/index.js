const app = require('../bin/server.js');
const Pokemon = require('./pokemon.js');
const Timer = require('./timer.js');
const userRegistrationRouter = require('../api/userRegistration.js');
const userLogInRouter = require('../api/userLogIn.js');
const CalculateTime = require('./timer/calculateTime');
const CheckUserTimer = require('./timer/checkUserTimer');
const NO_TIMER = 'NO_TIMER';

app.use(userRegistrationRouter);
app.use(userLogInRouter);

app.post('/pokemon/timer/check', (req, res) => {
  let { userId } = req.body;
  CheckUserTimer.checkTimer(userId)
    .then((resp) => {
      let flag;
      if (resp[0].pokemonTimer === NO_TIMER) {
        flag = false;
      } else flag = true;
      res.json({
        succes: true,
        message: 'POST successfull',
        data: resp[0].pokemonTimer,
        flag,
      });
    })
    .catch((err) => console.error(err));
});

app.patch('/pokemon/timer', (req, res) => {
  let { userId } = req.body;
  res.json({ succes: true, message: 'PATCH successfull' });
});

app.get('/pokemon/new', (req, res) => {
  const pokemon = new Pokemon();
  res.json({ pokemon });
});
