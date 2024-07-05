export default interface IQueryBuilder {
	name?: RegExp;
	level?: number;
	maxDifficulty?: RegExp;
	"raid.tier"?: RegExp;
	"raid.expansion"?: RegExp;
}
