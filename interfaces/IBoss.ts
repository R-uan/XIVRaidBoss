import IRaid from "./IRaid";

export default interface IBoss {
	name: string;
	title: string;
	level: number;
	maxDifficulty: string;
	hasSecondPhase: boolean;
	raid: IRaid;
}
