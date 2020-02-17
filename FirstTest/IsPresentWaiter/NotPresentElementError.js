class NotPresentElementError extends Error{
    constructor(message) {
        super(message);
        this.name = "NotPresentElementError";
    }
}

module.exports = NotPresentElementError;