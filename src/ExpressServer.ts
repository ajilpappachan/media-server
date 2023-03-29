import { Application } from "express";
import express from "express";
import IExpressServer from "./interfaces/IExpressServer";
import IExpressRouter from "./interfaces/IExpressRouter";

export default class Server implements IExpressServer {
	private _app: Application;
	private _port: number;

	constructor(port: string | number) {
		this._port = typeof port === "string" ? parseInt(port) : port;
		this._app = express();
	}

	AddRouter(router: IExpressRouter): void {
		router.UseRouter(this._app);
	}

	Listen(): void {
		this._app.listen(this._port, () => {
			console.log("Listening to server on port " + this._port);
		});
	}
}
