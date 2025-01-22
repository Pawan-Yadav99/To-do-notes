const GlobalErrors = {
  INTERNAL_SERVER_ERROR: "Internal server error",
  VALIDATION_FAILED: "Validation error",
};

const paramConsts = {
  TITLE: "title",
  ID: "id",
};

const models = {
  NOTES: "notes",
};
const messages = {
  INTERNAL_SERVER_ERROR: "Internal server error",
  NOTE_CREATION_FAILED: "Failed to create note",
  NOTE_ALREADY_EXIST: "This note already exist",
  NOTE_NOT_EXIST: "This note does not exist",
  NOTE_FETCH_FAILED: "Failed to fetch note details",
  NOTE_DELETION_FAILED: "Failed to delete note",
  NOTE_UPDATE_FAILED: "Failed to update note",
  NOTE_CREATED: "Note has been created successfully",
  NOTE_UPDATED: "Note has been updated successfully",
  NOTE_FETCHED: "Note details fetched successfully",
  NOTE_DELETED: "Note has been deleted successfully",
};

module.exports = Object.freeze({
  GlobalErrors,
  paramConsts,
  messages,
  models,
});
