import { Application } from "express";

export default interface IExpressRouter {
	UseRouter: (app: Application) => void;
}
