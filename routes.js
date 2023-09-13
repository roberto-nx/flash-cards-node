import express from "express";
const { registerUser, signInUser} = require('../controllers/user.js');
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ test:"test" });
});
router.post('/sign-up', registerUser);
router.post('/sign-in', signInUser);

export { routes as default };