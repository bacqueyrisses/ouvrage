// @ts-nocheck

// set things up
var app = Application.currentApplication();
app.includeStandardAdditions = true;
var notesApp = Application("Notes");
notesApp.includeStandardAdditions = true;

// choose which notes
var notes = notesApp.notes;
var whichNotes = "MOTS";

// initialize an object to store the words and definitions
var wordsAndDefinitions = {};

// loop through all notes
for (var i = 0; i < notes.length; i++) {
  // is this note one to be exported?
  if (whichNotes.indexOf(notes[i].name()) > -1) {
    var noteContent = notes[i].body();
    var lines = noteContent.split("\n");

    // loop through each line and extract word and definition
    for (var j = 1; j < lines.length; j++) {
      var line = lines[j];
      var parts = line.split(":");
      if (parts.length === 2) {
        var word = parts[0].replace(/<\/?div[^>]*>/g, "").trim();
        var definition = parts[1].replace(/<\/?div[^>]*>/g, "").trim();
        wordsAndDefinitions[word] = definition;
      }
    }
  }
}

// choose save location
var saveWhere = "/";
var filename = saveWhere + "words.json";

// convert the object to a JSON string
var jsonOutput = JSON.stringify(wordsAndDefinitions, null, 2);

var str = $.NSString.alloc.initWithUTF8String(jsonOutput);
str.writeToFileAtomicallyEncodingError(
  filename,
  true,
  $.NSUTF8StringEncoding,
  null
);

// write the JSON to a file

console.log("✔ JSON file created successfully.");
