const appError = require("../responseHandlers/errorHandler");
const constants = require("../utils/constants");
const Joi = require("joi");

const validateCreateNote = (req, res, next) => {
  const validationRes = Joi.object({
    title: Joi.string().min(3).max(50).disallow("").required(),
    description: Joi.string().min(10).max(100).disallow("").optional(),
  }).validate(req.body);

  if (validationRes.error) {
    return res
      .status(404)
      .json(
        new appError(
          404,
          validationRes.error?.details,
          constants.GlobalErrors.VALIDATION_FAILED
        )
      );
  } else next();
};

const validateGetNoteList = (req, res, next) => {
  const validationRes = Joi.object({
    page: Joi.number().min(1).required(),
    limit: Joi.number().min(1).required(),
  }).validate(req.query);

  if (validationRes.error) {
    return res
      .status(404)
      .json(
        new appError(
          404,
          validationRes.error?.details,
          constants.GlobalErrors.VALIDATION_FAILED
        )
      );
  } else next();
};

const validateUpdateNote = (req, res, next) => {
  const validationRes = Joi.object({
    title: Joi.string().min(3).max(50).disallow("").optional(),
    description: Joi.string().min(10).max(100).disallow("").optional(),
  }).validate(req.body);

  if (validationRes.error) {
    return res
      .status(404)
      .json(
        new appError(
          404,
          validationRes.error?.details,
          constants.GlobalErrors.VALIDATION_FAILED
        )
      );
  } else next();
};

module.exports = {
  validateCreateNote,
  validateGetNoteList,
  validateUpdateNote,
};
