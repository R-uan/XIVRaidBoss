import IBoss from "../interfaces/IBoss";
import IQueryOptions from "../interfaces/IQueryOptions";
import RaidBossRepository from "./RaidBossRepository";

export default class RaidBossService {
	public static async FindAll() {
		return await RaidBossRepository.FindAll();
	}

	public static async Save(data: IBoss) {
		return await RaidBossRepository.Save(data);
	}

	public static async Query(params: IQueryOptions) {
		return await RaidBossRepository.Query(params);
	}
}
