import dotenv from "dotenv";
import BaseRouter from "./BaseRouter";
import ExpressServer from "./ExpressServer";
import IExpressRouter from "./interfaces/IExpressRouter";
import IExpressServer from "./interfaces/IExpressServer";
import cleanGeneratedFiles from "./utils/cleanGeneratedFiles";

dotenv.config();

cleanGeneratedFiles();

const server: IExpressServer = new ExpressServer(process.env.PORT || "8000");
const baseRouter: IExpressRouter = new BaseRouter("/");

server.AddRouter(baseRouter);
server.Listen();
