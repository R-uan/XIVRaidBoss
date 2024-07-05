import express from "express";
import ValidateRaidBoss from "./middlewares/ValidateRaidBoss";
import RaidbossController from "./application/RaidbossController";
import DatabaseInitialization from "./database/DatabaseInitialization";

const port = 3002;
const app = express();

app.use(express.json());
app.route("api/").get(RaidbossController.Get).post(ValidateRaidBoss, RaidbossController.Post);
app.route("api/q").get(RaidbossController.Query);

app.listen(port, () => {
	DatabaseInitialization((uri) => {
		console.log(uri);
	});
});
