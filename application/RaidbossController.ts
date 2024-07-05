import { NextFunction, Request, Response } from "express";
import RaidBossService from "./RaidBossService";
import IBoss from "../interfaces/IBoss";
import IQueryOptions from "../interfaces/IQueryOptions";

export default class RaidbossController {
	public static async Get(req: Request, res: Response) {
		const query = await RaidBossService.FindAll();
		res.json(query);
	}

	public static async Post(req: Request, res: Response) {
		const body = req.body as IBoss;
		const save = await RaidBossService.Save(body);
		res.json(save);
	}

	public static async Query(req: Request, res: Response) {
		const params = req.query as unknown as IQueryOptions;
		const result = await RaidBossService.Query(params);
		res.json(result);
	}
}
