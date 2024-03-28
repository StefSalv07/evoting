const { validationResult } = require("express-validator");

function handleValidationError(res, errors) {
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
}

function handleError(err, req, res, next) {
  console.error("Error:", err);
  return res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
}

function handleNotFound(req, res, next) {
  return res.status(404).json({ error: "Not Found" });
}

module.exports = { handleValidationError, handleError, handleNotFound };
