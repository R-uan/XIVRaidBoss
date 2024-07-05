import Ensure from "../utils/Ensure";

describe("Ensure that ensure is ensuring", () => {
	it("should return the value", () => {
		const target = Ensure(0, "mensagem");
		expect(target).toBe(0);
	});

	it("should throw an error", () => {
		const value = null as unknown;
		expect(() => {
			Ensure(value, "mensagem");
		}).toThrow("mensagem");
	});
});
