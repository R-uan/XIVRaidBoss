import IRaidBoss from "../interfaces/IRaidBoss";
import { NextFunction, Request, Response } from "express";
import BadRequestResponse from "../utils/ResponseBodies/BadRequestResponse";
import IRaidBossValidationError, { IRaidValidationError } from "../interfaces/IRaidBossValidationError";
import IRaid from "../interfaces/IRaid";

export function ValidateRaidFields(raid: IRaid): IRaidValidationError | string | null {
	if (raid == null) return "Raid information is required.";

	const errors: IRaidValidationError = {};
	const { abbreviation, expansion, name, tier } = raid;

	if (!name) errors.name = "Raid name is required.";
	if (!tier) errors.tier = "Raid tier is required.";
	if (!expansion) errors.expansion = "Raid expansion is required.";
	if (!abbreviation) errors.abbreviation = "Raid abbreviation is required.";

	return Object.keys(errors).length > 0 ? errors : null;
}

export function ValidadeBossFields(boss: IRaidBoss) {
	const errors: IRaidBossValidationError = {};
	const { name, isDoorBoss, level, maxDifficulty, title } = boss;

	if (!name) errors.name = "Boss name is required.";
	if (!title) errors.title = "Boss title is required.";
	if (isDoorBoss == null) errors.isDoorBoss = "isDoorBoss is required.";
	if (!maxDifficulty) errors.maxDifficulty = "maxDifficulty is required.";
	if (!level) errors.level = "Level is required and should be 50 or higher.";

	return errors;
}

export default function ValidateRaidBoss(req: Request, res: Response, next: NextFunction) {
	const body = req.body as IRaidBoss;
	console.log("Hello");
	let bossFieldsValidation = ValidadeBossFields(body);
	const raidFieldsValidation = ValidateRaidFields(body.raid);
	if (raidFieldsValidation) bossFieldsValidation.raid = raidFieldsValidation;

	if (Object.keys(bossFieldsValidation).length > 0) {
		const response = new BadRequestResponse(bossFieldsValidation);
		return res.status(400).json(response);
	}

	next();
}
