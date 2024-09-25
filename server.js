const express = require ('express');
const bodyParser = require('body-perser');
const app =express ();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3001, () => {
    console.log(`Server started on port`);
});