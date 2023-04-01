import ffmpeg from "fluent-ffmpeg";
import jimp from "jimp";
import * as path from "path";
import parseDirFromUrl from "./parseDirFromUrl";
import getFileType from "./getFileType";

const generateThumbnailFromVideo = (
	dir: string,
	filename: string
): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		ffmpeg(dir)
			.on("filenames", (filenames) => {
				console.log("Generating thumbnail with filename", filenames[0]);
			})
			.on("end", () => {
				resolve(filename + ".png");
			})
			.on("error", (error) => {
				console.error("Failed to generate thumbnail from video", error);
				reject(error);
			})
			.screenshots({
				count: 1,
				filename: filename,
				timestamps: ["10%"],
				size: "500x500",
				folder: path.join(__dirname, "../.generated/"),
			});
	});
};

const generateThumbnailFromImage = (
	dir: string,
	filename: string
): Promise<string> => {
	return new Promise((resolve, reject) => {
		jimp.read(dir, (error, image) => {
			console.log("Generating thumbnail with filename", filename);
			if (error) reject(error);
			image
				.resize(500, 500)
				.write(path.join(__dirname, "../.generated", filename + ".png"));
			resolve(filename + "png");
		});
	});
};

export default async (
	url: string,
	filename: string
): Promise<string | undefined> => {
	const dir = parseDirFromUrl(url);
	const type = getFileType(filename);
	const finalFileName = `${url.replace(">", "")}-${filename}-thumb`.replace(
		".",
		"_"
	);
	const thumb =
		type === "video"
			? await generateThumbnailFromVideo(
					path.join(dir, filename),
					finalFileName
			  )
			: await generateThumbnailFromImage(
					path.join(dir, filename),
					finalFileName
			  );
	return thumb;
};
