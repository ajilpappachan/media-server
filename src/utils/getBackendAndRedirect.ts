import axios from "axios";
import { Redirect } from "next";

export default async (url): Promise<Redirect | null> => {
	try {
		const response = (
			await axios.get<string>(process.env.BACKEND_URL + "/ping")
		).data;
		if (response === "pong") return null;
	} catch (error) {
		console.error("Could not connect to server");
		return {
			statusCode: 302,
			destination: `/down?retry=${url}`,
		};
	}
};
