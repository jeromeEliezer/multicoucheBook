const { PAYLOAD_TOO_LARGE } = require("../status_codes");

module.exports = class PayloadTooLarge extends Error {
  constructor(message, description, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PayloadTooLarge);
    }
    // const message = "le poids de cette image ne convient pas.";
    this.name = `PayloadTooLarge`;
    this.status = PAYLOAD_TOO_LARGE;
    this.message = message;
    this.description = description;
  }
};