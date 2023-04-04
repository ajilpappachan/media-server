import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { AppProps } from "next/app";
import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
