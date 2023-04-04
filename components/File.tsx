import React, { ReactElement } from "react";
import IFile from "../src/interfaces/common/IFile";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import MovieIcon from "@mui/icons-material/Movie";
import ArticleIcon from "@mui/icons-material/Article";

const File = ({ name, thumbnail, type }: IFile) => {
	let icon: ReactElement = undefined;
	switch (type) {
		case "folder":
			icon = <FolderIcon fontSize="large" />;
			break;
		case "image":
			icon = <ImageIcon fontSize="large" />;
			break;
		case "video":
			icon = <MovieIcon fontSize="large" />;
			break;
		default:
			icon = <ArticleIcon fontSize="large" />;
			break;
	}
	return (
		<Card sx={{ maxWidth: 300 }}>
			<Box
				sx={{
					height: 300,
					width: 300,
					backgroundImage: `url(${thumbnail})`,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{icon}
			</Box>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
			</CardContent>
			{/* <CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
};

export default File;
