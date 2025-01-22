const constants = require("../utils/constants");
const noteService = require("../services/notes_Service");
const apiResponse = require("../responseHandlers/apiResponse");
const appError = require("../responseHandlers/errorHandler");

const createNote = async (params, res) => {
  try {
    return noteService
      .createNote(params)
      .then(async (result) => {
        return new apiResponse(201, constants.messages.NOTE_CREATED, result);
      })
      .catch((error) => {
        res
          .status(500)
          .json(
            new appError(
              500,
              constants.messages.NOTE_CREATION_FAILED,
              error?.meta?.cause || error.message
            )
          );
      });
  } catch (error) {
    return res
      .status(500)
      .json(
        new appError(
          500,
          constants.messages.NOTE_CREATION_FAILED,
          error?.meta?.cause || error.message
        )
      );
  }
};

const getNotes = async (params, res) => {
  try {
    return noteService
      .getNotes(params.page, params.limit)
      .then(async (notes) => {
        return new apiResponse(200, constants.messages.NOTE_FETCHED, notes);
      })
      .catch((err) => {
        res
          .status(500)
          .json(
            new appError(500, constants.messages.NOTE_FETCH_FAILED, err.message)
          );
      });
  } catch (error) {
    res
      .status(500)
      .json(
        new appError(
          500,
          constants.messages.INTERNAL_SERVER_ERROR,
          error.message
        )
      );
  }
};

const updateNote = async (req, res) => {
  try {
    const requestBody = req.body;
    const note = req.note;
    if (requestBody.title) {
      //check if provided title already taken
      const checkIfNoteAlreadyExists = await noteService.getNoteByKey({
        title: requestBody.title,
      });
      if (checkIfNoteAlreadyExists)
        return res
          .status(400)
          .json(
            new appError(
              404,
              constants.messages.NOTE_ALREADY_EXIST,
              constants.GlobalErrors.VALIDATION_FAILED
            )
          );
      note.title = requestBody.title;
    }
    if (requestBody.description) note.description = requestBody.description;
    note.updatedAt = new Date();
    return noteService
      .updateNote(note)
      .then(async (response) => {
        return new apiResponse(200, constants.messages.NOTE_UPDATED, response);
      })
      .catch((err) => {
        res
          .status(500)
          .json(
            new appError(
              500,
              constants.messages.NOTE_UPDATE_FAILED,
              err.message
            )
          );
      });
  } catch (error) {
    res
      .status(500)
      .json(
        new appError(
          500,
          constants.messages.INTERNAL_SERVER_ERROR,
          error.message
        )
      );
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    return noteService
      .deleteNote(noteId)
      .then((response) => {
        return new apiResponse(200, constants.messages.NOTE_DELETED);
      })
      .catch((err) => {
        res
          .status(500)
          .json(
            new appError(
              500,
              constants.messages.NOTE_DELETION_FAILED,
              err.message
            )
          );
      });
  } catch (error) {
    res
      .status(500)
      .json(
        new appError(
          500,
          constants.messages.INTERNAL_SERVER_ERROR,
          error.message
        )
      );
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};
