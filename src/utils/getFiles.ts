import IFile from "../interfaces/common/IFile";
import IFileData from "../interfaces/common/IFileData";
import parseDirFromUrl from "./parseDirFromUrl";
import { readdir } from "fs/promises";
import getFileType from "./getFileType";

export default async (url: string): Promise<IFileData> => {
	let files: IFile[] = [];

	try {
		const dir = parseDirFromUrl(url);

		const dirents = await readdir(dir, { withFileTypes: true });
		dirents.map((dirent) => {
			const name = dirent.name;
			const type = dirent.isDirectory() ? "folder" : getFileType(dirent.name);
			files.push({ name, type });
		});
	} catch (error) {
		console.error("Failed to read folder");
	}

	return {
		files,
		url,
	};
};
