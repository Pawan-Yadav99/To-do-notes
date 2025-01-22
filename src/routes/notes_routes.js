const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes_controller");
const middlewares = require("../middlewares");
const constants = require("../utils/constants");
const noteValidators = require("../validators/notes_validation");

router.post(
  "/",
  [
    noteValidators.validateCreateNote,
    middlewares.notes.checkNotesAlreadyExists(constants.paramConsts.TITLE),
  ],
  async (req, res) => {
    return notesController
      .createNote(req.body, res)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        return error;
      });
  }
);

router.get("/", [noteValidators.validateGetNoteList], async (req, res) => {
  return notesController
    .getNotes(req.query, res)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      return error;
    });
});

router.put(
  "/:id",
  [
    noteValidators.validateUpdateNote,
    middlewares.notes.checkNoteExists(constants.paramConsts.ID),
  ],
  async (req, res) => {
    return notesController
      .updateNote(req, res)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        return error;
      });
  }
);

router.delete(
  "/:id",
  [middlewares.notes.checkNoteExists(constants.paramConsts.ID)],
  async (req, res) => {
    return notesController
      .deleteNote(req, res)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        return error;
      });
  }
);

module.exports = router;
