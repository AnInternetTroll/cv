import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import type { PaletteMode, } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { Dispatch, SetStateAction, } from "react";

const NavLink = (
	{ name = "", link = "", }: { name?: string; link?: string; },
) => (
	<Button color="inherit">
		<Link href={link}>{name}</Link>
	</Button>
);

export default function navbar(
	{ mode, setMode, }: { mode: PaletteMode; setMode: Dispatch<SetStateAction<PaletteMode>>; },
) {
	return (
		<Box sx={{ flexGrow: 1, }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
						Luca
					</Typography>
					<NavLink name="Home" link="/" />
					<Checkbox
						aria-label="Dark mode"
						sx={{
							"&.Mui-checked": {
								color: "lightgreen",
							},
						}}
						onChange={() => setMode(mode === "dark" ? "light" : "dark",)}
						checked={mode === "dark"}
					/>
					<NavLink name="Projects" link="/projects" />
					<NavLink name="Søknad" link="/soknad" />
					<NavLink name="CV" link="/cv" />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
