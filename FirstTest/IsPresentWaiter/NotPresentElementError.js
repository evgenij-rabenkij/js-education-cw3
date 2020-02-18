export class NotPresentElementError extends Error{
    constructor(message) {
        super(message);
        this.name = "NotPresentElementError";
    }
}