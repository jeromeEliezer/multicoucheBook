const { BAD_REQUEST } = require("../status_codes");

module.exports = class ValidationError extends Error {
  constructor(errors, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

    const message = "Oups, il manque des informations";

    this.name = `ValidationError`;
    this.status = BAD_REQUEST;
    this.message = message;
    this.errors = errors;
  }
};