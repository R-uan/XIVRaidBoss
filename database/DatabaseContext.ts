import mongoose from "mongoose";
import IBoss from "../interfaces/IBoss";
import IRaid from "../interfaces/IRaid";

const RaidSchema = new mongoose.Schema<IRaid>({
	name: { type: String, required: true },
	tier: { type: String, required: true },
	expansion: { type: String, required: true },
	abbreviation: { type: String, required: true },
});

const BossSchema = new mongoose.Schema<IBoss>({
	name: { type: String, required: true },
	level: { type: Number, required: true },
	title: { type: String, required: true },
	hasSecondPhase: { type: Boolean, required: true },
	maxDifficulty: { type: String, required: true },
	raid: {
		type: RaidSchema,
	},
});

export const DatabaseContext = mongoose.model("RaidBosses", BossSchema);
