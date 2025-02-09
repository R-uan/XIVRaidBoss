export default interface IRaidBossValidationError {
	name?: string;
	title?: string;
	level?: string;
	maxDifficulty?: string;
	isDoorBoss?: string;
	raid?: IRaidValidationError | string;
}

export interface IRaidValidationError {
	name?: string;
	tier?: string;
	expansion?: string;
	abbreviation?: string;
}
