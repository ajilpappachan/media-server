import React from "react";
import IFile from "../src/interfaces/common/IFile";

const File = ({ name, thumbnail, type }: IFile) => {
	return (
		<div>
			<img src={thumbnail} alt={name} />
			<p>{name}</p>
		</div>
	);
};

export default File;
