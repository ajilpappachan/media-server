import React from "react";
import IFile from "../src/interfaces/common/IFile";
import File from "./File";
import Container from "@mui/material/Container";
import Link from "next/link";

interface FolderProps {
	url: string;
	files: IFile[];
}

const Folder = ({ url, files }: FolderProps) => {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				gap: 5,
			}}
		>
			{files.map((file) => (
				<Link href={`/${file.type}/${url}->${file.name}`}>
					<File {...file} />
				</Link>
			))}
		</Container>
	);
};

export default Folder;
