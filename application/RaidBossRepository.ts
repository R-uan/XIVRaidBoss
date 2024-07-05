import { DatabaseContext } from "../database/DatabaseContext";
import IRaidBoss from "../interfaces/IRaidBoss";
import IQueryBuilder from "../interfaces/IQueryBuilder";
import IQueryOptions from "../interfaces/IQueryOptions";
import RaidBossQueryBuilder from "../utils/RaidBossQueryBuilder";
export default class RaidBossRepository {
	public static async FindAll() {
		const bosses: IRaidBoss[] = await DatabaseContext.find();
		return bosses;
	}

	public static async FindByName(input: string) {
		const bosses: IRaidBoss[] | null = await DatabaseContext.find({ name: `/${input}/i` });
		return bosses;
	}

	public static async Save(data: IRaidBoss) {
		const create = await DatabaseContext.create(data);
		return create;
	}

	public static async FindByRaid(input: string) {
		const bosses: IRaidBoss[] = await DatabaseContext.find({ raid: `/${input}/i` });
		return bosses;
	}

	public static async Query(params: IQueryOptions) {
		console.log(params);
		const query = RaidBossQueryBuilder(params);
		const bosses: IRaidBoss[] = await DatabaseContext.find(query);
		return bosses;
	}
}
