import { NextFunction, Request, Response } from "express";
import RaidBossService from "./RaidBossService";
import IRaidBoss from "../interfaces/IRaidBoss";
import IQueryOptions from "../interfaces/IQueryOptions";
import BadRequestResponse from "../utils/ResponseBodies/BadRequestResponse";

export default class RaidbossController {
	public static async Get(req: Request, res: Response) {
		const query = await RaidBossService.FindAll();
		res.json(query);
	}

	public static async Post(req: Request, res: Response) {
		const body = req.body as IRaidBoss;
		const save = await RaidBossService.Save(body);
		res.json(save);
	}

	public static async Query(req: Request, res: Response) {
		const params = req.query as unknown as IQueryOptions;
		if (params.level && !isNaN(parseInt(`${params.level}`))) {
			params.level = parseInt(`${params.level}`);
		} else {
			const response = new BadRequestResponse({ level: "Level should be a number." }, "Bad query format.");
			return res.status(400).json(response);
		}
		const result = await RaidBossService.Query(params);
		return res.json(result);
	}
}
