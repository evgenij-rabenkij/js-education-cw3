"use strict";

module.exports = class NotDisplayedElementError extends Error{
    constructor(message) {
        super(message);
        this.name = "NotDisplayedElementError";
    }
}