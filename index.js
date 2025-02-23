const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/m3u-sports.m3u', (req, res) => {
    res.setHeader('Content-Type', 'application/x-mpegURL');
    res.sendFile(__dirname + '/assets/playlist.m3u');
});

app.get("/", (req, res) => {
    res.status(200).json("Access Denied");
});

app.listen(port || process.env.PORT, () => {
    console.log(`Server is running on port ${port || process.env.PORT}`);
});