import { DatabaseContext } from "../database/DatabaseContext";
import IBoss from "../interfaces/IBoss";
import IQueryBuilder from "../interfaces/IQueryBuilder";
import IQueryOptions from "../interfaces/IQueryOptions";
import RaidBossQueryBuilder from "../utils/RaidBossQueryBuilder";
export default class RaidBossRepository {
	public static async FindAll() {
		const bosses: IBoss[] = await DatabaseContext.find();
		return bosses;
	}

	public static async FindByName(input: string) {
		const bosses: IBoss[] | null = await DatabaseContext.find({ name: `/${input}/i` });
		return bosses;
	}

	public static async Save(data: IBoss) {
		const create = await DatabaseContext.create(data);
		return create;
	}

	public static async FindByRaid(input: string) {
		const bosses: IBoss[] = await DatabaseContext.find({ raid: `/${input}/i` });
		return bosses;
	}

	public static async Query(params: IQueryOptions) {
		console.log(params);
		const query = RaidBossQueryBuilder(params);
		const bosses: IBoss[] = await DatabaseContext.find(query);
		return bosses;
	}
}
