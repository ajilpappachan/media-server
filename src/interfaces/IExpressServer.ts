import IExpressRouter from "./IExpressRouter";

export default interface IExpressServer {
	AddRouter: (router: IExpressRouter) => void;
	Listen: () => void;
}
