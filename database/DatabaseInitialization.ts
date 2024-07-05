import mongoose, { ConnectOptions } from "mongoose";
import { config } from "dotenv";
import Ensure from "../utils/Ensure";
config();

export default async function DatabaseInitialization(callback?: (uri: string) => void) {
	const uri = Ensure(process.env.MONGO_URI, "Missing database connection uri.");
	const options: ConnectOptions = {};
	const connection = (await mongoose.connect(uri, options)).connection;
	if (callback) callback(uri);
	return connection.readyState;
}
