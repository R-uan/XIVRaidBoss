import express, { Request, Response } from "express";
import IQueryOptions from "./interfaces/IQueryOptions";
import ValidateRaidBoss from "./middlewares/validateRaidBoss";
import DatabaseInitialization from "./database/DatabaseInitialization";

const port = 3002;
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	const queryValues = req.query as unknown as IQueryOptions;
	console.log(queryValues.name);
	res.send(queryValues);
});

app.post("/", ValidateRaidBoss, (req: Request, res: Response) => {
	res.send(req.body);
});

app.listen(port, () => {
	DatabaseInitialization((uri) => {
		console.log(uri);
	});
});
