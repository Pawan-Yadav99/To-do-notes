const constants = require("../utils/constants");
const noteService = require("../services/notes_Service");
const appError = require("../responseHandlers/errorHandler");
const mongoose = require("mongoose");

// Check if the note exists based on key
const checkNotesAlreadyExists = (options) => {
  return (req, res, next) => {
    const query = {};
    switch (options) {
      case constants.paramConsts.TITLE:
        query.title = req.body.title;
        break;

      case constants.paramConsts.ID:
        query._id = req.body.id;
        break;

      default:
        query._id = req.body.id;
        break;
    }

    return noteService.getNoteByKey(query).then((result) => {
      if (result)
        return res
          .status(400)
          .json(
            new appError(
              404,
              constants.messages.NOTE_ALREADY_EXIST,
              constants.GlobalErrors.VALIDATION_FAILED
            )
          );
      next();
    });
  };
};

//check if not exists
const checkNoteExists = (options) => {
  return (req, res, next) => {
    const query = {};
    switch (options) {
      case constants.paramConsts.ID:
        query._id = new mongoose.Types.ObjectId(req.params.id);
        break;

      default:
        query._id = req.params.id;
        break;
    }

    return noteService.getNoteByKey(query).then((result) => {
      if (!result)
        return res
          .status(400)
          .json(
            new appError(
              404,
              constants.messages.NOTE_NOT_EXIST,
              constants.GlobalErrors.VALIDATION_FAILED
            )
          );
      req.note = result;
      next();
    });
  };
};

module.exports = {
  checkNotesAlreadyExists,
  checkNoteExists,
};
