import IBoss from "../interfaces/IBoss";
import { NextFunction, Request, Response } from "express";
import BadRequestResponse from "../utils/ResponseBodies/BadRequestResponse";
import IRaidBossValidationError, { IRaidValidationError } from "../interfaces/IRaidBossValidationError";

export default function ValidateRaidBoss(req: Request, res: Response, next: NextFunction) {
	let validationErrors: IRaidBossValidationError = {};

	const { name, hasSecondPhase, level, maxDifficulty, raid, title } = req.body as IBoss;
	if (!name || name.length < 3) {
		validationErrors.name = "Boss name is required and should have a length higher than 3";
	}

	if (!title || title.length < 3) {
		validationErrors.title = "Boss title is required and should have a length higher than 3.";
	}
	if (!hasSecondPhase) {
		validationErrors.hasSecondPhase = "hasSecondPhase is required.";
	}
	if (!maxDifficulty || maxDifficulty.length < 6) {
		validationErrors.maxDifficulty = "Name is required and should have a length higher than 6.";
	}

	if (!level || level < 50) {
		validationErrors.level = "Level should be 50 or higher.";
	}

	if (!raid) {
		validationErrors.raid = "Raid information is required.";
	} else {
		const raidValidationErrors: IRaidValidationError = {};
		if (!raid.name || raid.name.length < 10) {
			raidValidationErrors.name = "Raid name is required.";
		}

		if (!raid.tier || raid.tier.length < 4) {
			raidValidationErrors.tier = "Raid tier is required.";
		}

		if (!raid.expansion || raid.expansion.length < 4) {
			raidValidationErrors.expansion = "Raid expansion is required.";
		}

		if (!raid.abbreviation || raid.abbreviation.length < 3) {
			raidValidationErrors.abbreviation = "Raid abbreviation is required.";
		}

		validationErrors.raid = raidValidationErrors;
	}

	if (validationErrors.toString().length > 0) {
		const response = new BadRequestResponse("Invalid bot received.", validationErrors);
		return res.status(400).json(response);
	}
	next();
}
