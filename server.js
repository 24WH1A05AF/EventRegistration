const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML page
app.use(express.static("public"));

// Registration API (Microservice)
app.post("/register", (req, res) => {

    console.log(req.body);

    res.send(`
        <h2>Registration Successful!</h2>

        <table border="1" cellpadding="10">
            <tr><th>Field</th><th>Value</th></tr>

            ${Object.entries(req.body).map(([key, value]) =>
                `<tr><td>${key}</td><td>${value}</td></tr>`
            ).join("")}

        </table>

        <br>

        <a href="/">Register Another Student</a>
    `);

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



