import { rmSync } from "fs";
import * as path from "path";

export default () => {
	rmSync(path.join(__dirname, "../.generated"), {
		recursive: true,
		force: true,
	});
};
