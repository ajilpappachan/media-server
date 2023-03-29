export default interface IFile {
	id: string;
	name: string;
	thumbnail: string;
	type: "folder" | "file";
}
