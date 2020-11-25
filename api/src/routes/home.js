const userRepo = require("../repositories/user");

const { Router } = require("express");

const home = Router();

home.get("/", (request, response) => {
  // typically I would write a class representing a userRepository
  // the userRepository would user dependency injection to tie together services like Mongo, S3
  const userPayload = userRepo;

  response.send({ success: true, user: userPayload });
});

module.exports = home;
