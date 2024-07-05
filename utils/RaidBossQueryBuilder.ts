import IQueryBuilder from "../interfaces/IQueryBuilder";
import IQueryOptions from "../interfaces/IQueryOptions";

export default function RaidBossQueryBuilder(params: IQueryOptions) {
	const builtQuery: IQueryBuilder = {};
	if (params.name) builtQuery.name = new RegExp(String.raw`${params.name}`, "i");
	if (params.level) builtQuery.level = parseInt(`${params.level}`);
	if (params.tier) builtQuery["raid.tier"] = new RegExp(String.raw`${params.tier}`, "i");
	if (params.expansion) builtQuery["raid.expansion"] = new RegExp(String.raw`${params.expansion}`, "i");
	return builtQuery;
}
