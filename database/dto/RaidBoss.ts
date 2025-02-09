import IBoss from "../../interfaces/IRaidBoss";
import IRaid from "../../interfaces/IRaid";

export default class RaidBoss implements IBoss {
	name: string;
	title: string;
	level: number;
	maxDifficulty: string;
	isDoorBoss: boolean;
	raid: IRaid;
	constructor(data: IBoss) {
		this.name = data.name;
		this.raid = data.raid;
		this.level = data.level;
		this.title = data.title;
		this.maxDifficulty = data.maxDifficulty;
		this.isDoorBoss = data.isDoorBoss;
	}
}
