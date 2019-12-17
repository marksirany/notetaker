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
app.use(express.static("public"));

// * Create a few array variables that will hold the data
let noteCreate = 0;

//----------------------------------------------------------------------------//

// I. Create a set of routes for getting and posting data//

//1. return note.html file//
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

//2. return the index.html file//
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//---------------------------------------------------------------------------//

//The application should have a`db.json` file on the backend that will be used to store and retrieve notes using the`fs` module.//

//---------------------------------------------------------------------------//

//II. The following API routes should be created:

//1. GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.//

app.get("/api/notes", function (req, res) {
    fs.readFile("Develop/db/db.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
            return;
        }

        res.send(data);
    });
});

//2. POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.//

app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    let newNotesString = "";
    // A new note increases the note id by 1
    noteCreate++;
    newNote.id = noteCreate;

    if (newNote) {
        console.log(`New note detected: ${newNote}`);
        // gets the data from db.json
        fs.readFile("Develop/db/db.json", "utf8", function (err, newNotesString) {
            if (err) {
                console.log(`Error occurred during readfile: ${err}`);
                return;
            }
            console.log(`Current Notes: ${newNotesString}`);
            // If notes already exist, this will be used to add to the current notes.
            if (newNotesString) {
                const notes = JSON.parse(newNotesString);
                console.log(`Added to already existing note`);

                const combinedNotes = [...notes, newNote];
                // Stringifies combined notes
                newNotesString = JSON.stringify(combinedNotes);
                // Writes over previous db.json
            } else {
                newNotesString = [JSON.stringify(newNote)];
            }

            fs.writeFile("Develop/db/db.json", newNotesString, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }

                res.send(newNote);
            });
        });
    } else {
        res.send("[]");
    }
});

//3. DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.//

//---------------------------------------------------------------------------//

// Starts the server to begin listening//
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
