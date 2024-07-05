export default class BadRequestResponse {
	message: string = "Bad request body data received.";
	code: number = 400;
	payload: {};

	constructor(payload: Object, message?: string) {
		this.payload = payload;
		if (message) this.message = message;
	}
}
