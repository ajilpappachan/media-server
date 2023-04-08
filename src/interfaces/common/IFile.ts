export default interface IFile {
	url: string;
	name: string;
	type: "folder" | "file" | "image" | "video";
	modified: Date;
	thumbnail?: string;
}
