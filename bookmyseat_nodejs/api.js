const client = require('./connection.js');
const path = require("path");
const cros = require('cors');
const express = require('express');
const app = express();
app.use(cros());

app.listen(3001, () => { console.log("server listen at the port http://localhost:3001") });

client.connect();

// get statndardSeats data

app.get("/standardseats/", (req, res) => {
    client.query(`Select * From STANDARDSEATS order by Id`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else {
            res.send(err.message);
        }
    });
    client.end;

})

// get seats available in standard seats by each row

app.get("/seatsavailable/", (req, res) => {
    const {
        for_row, for_seat, seats_available
    } = req.query;

    client.query(`Select ${for_row}, ${for_seat} From STANDARDSEATS where ${for_seat} ='${seats_available}'`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else {
            res.send(err.message);
        }
    });
    client.end;

})

// booking seats in statandard seats

app.put("/standardbookingseats/", (req, res) => {
    const { for_row, for_seat, seat_no } = req.query;
    const {status} = req.query;
    client.query(`Update STANDARDSEATS SET ${for_seat} = '${status}' where ${for_row} = '${seat_no}' `, (err, result) => {

        if (!err) {
            res.send('Booked Succesfully')
        }
        else {
            res.send(err.message)
        }
    });

    client.end;
})

// get premium seats data

app.get("/premiumseats/", (req, res) => {
    client.query(`Select * From premiumseats`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else {
            res.send(err.message);
        }
    });
    client.end;

})


// get seats available in premium seats by each row

app.get("/premiumseatsavailable/", (req, res) => {
    const {
        for_row, for_seat, seats_available
    } = req.query;

    client.query(`Select ${for_row}, ${for_seat} From premiumseats where ${for_seat} ='${seats_available}'`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else {
            res.send(err.message);
        }
    });
    client.end;

})

// premium booking seats in statandard seats

app.put("/premiumbookingseats/", (req, res) => {
    const { for_row, for_seat, seat_no } = req.query;
    const {status} = req.query;
    client.query(`Update premiumseats SET ${for_seat} = '${status}' where ${for_row} = '${seat_no}' `, (err, result) => {

        if (!err) {
            res.send('Booked Succesfully')
        }
        else {
            res.send(err.message)
        }
    });

    client.end;
})