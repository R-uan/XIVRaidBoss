export default class BadRequestResponse {
	message: string = "Bad request body data received.";
	code: number = 400;
	payload: {};

	constructor(message: string, payload: Object) {
		this.message = message;
		this.payload = payload;
	}
}
