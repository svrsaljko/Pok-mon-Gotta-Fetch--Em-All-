const UpdateUserTimer = require("../user/UpdateUserTimer");
const MIN = 1 * 60 * 1000;

sendTimeToUser = () => {
  UpdateUserTimer.getTimer(97, new Date(Date.now() + 10 * MIN));
};
