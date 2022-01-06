import { PaletteMode, } from "@mui/material";
import Container from "@mui/material/Container";
import { grey } from '@mui/material/colors';
import { createTheme, ThemeOptions, ThemeProvider, } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { AppProps, } from "next/app";
import { useMemo, useState, } from "react";
import Navbar from "../components/navbar";
import Box from '@mui/material/Box';

import "../styles/globals.css";
import styles from "../styles/globals.module.css";

function Cv({ Component, pageProps, }: AppProps,) {
	const [mode, setMode,] = useState<PaletteMode>("light",);
	const colorMode = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode,) => prevMode === "light" ? "dark" : "light");
			},
		}),
		[],
	);

	// Update the theme only if the mode changes
	const theme = useMemo(() => createTheme(getDesignTokens(mode,),), [mode,],);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{
				color: 'text.primary',
				bgcolor: 'background.default',
			}}>
				<Navbar mode={mode} setMode={setMode} />
				<br />
				<Container maxWidth="md">
					<Component {...pageProps} />
				</Container>
				<Typography variant="body1" className={styles.footer}>
					<hr />
					Info:
					<br />
					<a href="mailto:lucafulger@gmail.com">lucafulger@gmail.com</a>
					<br />
					46 23 55 43
				</Typography>
			</Box>
		</ThemeProvider>
	);
}
export default Cv;
function getDesignTokens(mode: PaletteMode,): ThemeOptions {
	if (mode === "dark")
		return {
			palette: {
				mode: "dark",
				background: {
					default: grey[700],
					paper: grey[900],
				}
			},
		};
	else
		return {
			palette: {
				mode: "light"
			}
		};
}
