import IBoss from "../interfaces/IBoss";
import IRaid from "../interfaces/IRaid";
import { ValidadeBossFields, ValidateRaidFields } from "../middlewares/ValidateRaidBoss";

describe("validate raid boss body with full data", () => {
	const data = {
		name: "Titan",
		title: "Heritor of Crags",
		level: 80,
		maxDifficulty: "Savage",
		isDoorBoss: false,
		raid: {
			name: "Sepulture",
			tier: "Eden's Gate",
			expansion: "Shadowbringers",
			abbreviation: "E4S",
		},
	};

	it("ValidateBossFields should return a object without keys", () => {
		const target = ValidadeBossFields(data);
		expect(Object.keys(target).length).toBe(0);
	});

	it("ValidateRaidFields should return null", () => {
		const target = ValidateRaidFields(data.raid);
		expect(target).toBeNull();
	});
});

describe("validate raid boss body with partial data", () => {
	const data = {
		name: "Titan",
		level: 80,
		raid: {
			name: "Sepulture",
			abbreviation: "E4S",
		},
	};

	it("ValidateRaidFields should return an object with 2 keys", function () {
		const target = ValidateRaidFields(data.raid as IRaid);
		expect(target).toBeTruthy();
		expect(Object.keys(target!).length).toBe(2);
	});

	it("ValidateRaidFields should return a string", function () {
		const target = ValidateRaidFields(null!);
		expect(typeof target == "string").toBeTruthy();
	});

	it("ValidateBossFields should return an object with 3 keys", function () {
		const target = ValidadeBossFields(data as IBoss);
		expect(Object.keys(target).length).toBe(3);
	});
});
