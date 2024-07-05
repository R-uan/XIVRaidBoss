import IRaid from "./IRaid";

export default interface IRaidBoss {
	name: string;
	title: string;
	level: number;
	maxDifficulty: string;
	isDoorBoss: boolean;
	raid: IRaid;
}
