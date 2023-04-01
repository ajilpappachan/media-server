import IFile from "../interfaces/common/IFile";
import IFileData from "../interfaces/common/IFileData";
import parseDirFromUrl from "./parseDirFromUrl";
import { readdir } from "fs/promises";
import getFileType from "./getFileType";
import getThumbnail from "./getThumbnail";
import * as path from "path";

export default async (url: string): Promise<IFileData> => {
	let files: IFile[] = [];

	try {
		const dir = parseDirFromUrl(url);

		const dirents = await readdir(dir, { withFileTypes: true });
		await Promise.all(
			dirents.map(async (dirent) => {
				const name = dirent.name;
				const type = dirent.isDirectory() ? "folder" : getFileType(dirent.name);
				const thumbnail = !dirent.isDirectory()
					? await getThumbnail(url, name)
					: undefined;
				files.push({ name, type, thumbnail });
			})
		);
	} catch (error) {
		console.error("Failed to load folder", error);
	}

	return {
		files,
		url,
	};
};
