const { default: mongoose } = require("mongoose");
const notes = require("../models/notes_model");

const createNote = (data) => notes.create(data);

const getNoteByKey = (query) => notes.findOne(query);

const getNotes = (page, limit) => {
  return notes
    .find({})
    .skip(page - 1)
    .limit(limit);
};

const updateNote = (noteDetails) => {
  const updatedNoteDetails = new notes(noteDetails);
  return updatedNoteDetails.save();
};

const deleteNote = (id) =>
  notes.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

module.exports = {
  createNote,
  getNoteByKey,
  getNotes,
  updateNote,
  deleteNote,
};
