import baseDirectories from "../private/baseDirectories";

export default (url: string): string => {
	const split = url.split("->");
	try {
		split[0] = baseDirectories[split[0]];
	} catch (error) {
		console.error("Failed to find base directory", error);
	}
	return split.join("/");
};
