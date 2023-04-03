import React from "react";
import IFile from "../src/interfaces/common/IFile";
import File from "./File";

interface FolderProps {
	files: IFile[];
}

const Folder = ({ files }: FolderProps) => {
	return (
		<div>
			{files.map((file) => (
				<File {...file} />
			))}
		</div>
	);
};

export default Folder;
