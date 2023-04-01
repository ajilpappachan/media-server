import express, { IRouter, Request, Response } from "express";
import IExpressRouter from "./interfaces/IExpressRouter";
import getFiles from "./utils/getFiles";
import * as path from "path";

export default class BaseRouter implements IExpressRouter {
	private _router: IRouter;
	private _base: string;

	constructor(base: string) {
		this._base = base;
		this._router = express.Router();

		this.useMiddlewares();
	}

	private useMiddlewares() {
		this._router.get("/ping", (req: Request, res: Response) => {
			res.send("pong");
		});

		this._router.get("/folder/:url", async (req: Request, res: Response) => {
			const { url } = req.params;
			const fileData = await getFiles(url);
			res.json(fileData);
		});

		this._router.get(
			"/thumbnail/:name",
			async (req: Request, res: Response) => {
				const { name } = req.params;
				res.sendFile(path.join(__dirname, "/.generated", name));
			}
		);
	}

	public UseRouter(app: express.Application): void {
		app.use(this._base, this._router);
	}
}
