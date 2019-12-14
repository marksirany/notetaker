// Create a basic server using Express.JS
// Dependencies//
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Create a few array variables that will hold the data
const getNotes = [];
const saveNotes = [];
const deleteNote = [];

// * Create a set of routes for getting and posting  data
// Display all notes
app.get("/api/notes", function (req, res) {
    return res.json(getNotes);
});

// Create New Note - takes in JSON input
app.post("/api/notes", function (req, res) {
    

        // Adds the new note to our array notes
        getNotes.push(newReservations);

        // Sends the newReservation back to the front-end
        res.json(newReservations);
        // If there are already 5 reservations, the reservation request goes to the waitlist
    } else {

        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newWaitlist = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newWaitlist.type = "waitlist";
        // Console logs the newWaitlist information in the server side console.
        console.log(newWaitlist);
        res.json(newWaitlist);

        // Adds the new waitlist to our array waitlist
        waitlist.push(newWaitlist);
    }
    // updateTables()

})



// Starts the server to begin listening//
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});