import mongoose from "mongoose";
import IRaidBoss from "../interfaces/IRaidBoss";
import IRaid from "../interfaces/IRaid";

const RaidSchema = new mongoose.Schema<IRaid>({
	name: { type: String, required: true },
	tier: { type: String, required: true },
	expansion: { type: String, required: true },
	abbreviation: { type: String, required: true },
});

const BossSchema = new mongoose.Schema<IRaidBoss>({
	name: { type: String, required: true },
	level: { type: Number, required: true },
	title: { type: String, required: true },
	isDoorBoss: { type: Boolean, required: true },
	maxDifficulty: { type: String, required: true },
	raid: {
		type: RaidSchema,
	},
});

export const DatabaseContext = mongoose.model("RaidBosses", BossSchema);
