const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");
// Create a basic server using Express.JS
// Dependencies
// =============================================================
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
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});
// Display all waitlists
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});