"use strict";

const server = require("express");
const morgan = require("morgan");
const fs = require("node:fs");

/// Testing some Express server Code and using middlewares and route mounting

const app = server();
app.use(morgan("dev")); //logs requests to the console

app
  .get("/", (req, res) => {
    res.json({
      status: 200,
      data: {
        message: "Welcome to the API | from the res.json method",
      },
    });
  })
  .post("/", (req, res) => {
    res.json({
      status: 201,
      data: {
        message: "Hello from the post server !! same method chaining",
      },
    });
  });

const router = server.Router();

app.use("", router);

router.route("/api/v1/:id").get((req, res) => {
  //   console.log(`Hi from the router , route triggered was : /api/v1/`);
  res.json({
    status: 200,
    data: {
      message: `You hit the right endpoint for /api/v1`,
      parameters: req.params,
    },
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

/// 
