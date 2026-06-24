const express = require("express");
const Log = require("./services/logService");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "Home route accessed"
    );

    res.json({
        message: "Server running"
    });
});

app.listen(3000, async () => {

    await Log(
        "backend",
        "info",
        "service",
        "Server started successfully"
    );

    console.log("Server running");
});