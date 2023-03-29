import mime from "mime";

export default (name: string): "image" | "video" | "file" => {
	const type = mime.getType(name)?.split("/")[0];
	return type === "image" || type === "video" ? type : "file";
};
