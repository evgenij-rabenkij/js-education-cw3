"use strict";

module.exports = class NotPresentElementError extends Error{
    constructor(message) {
        super(message);
        this.name = "NotPresentElementError";
    }
}