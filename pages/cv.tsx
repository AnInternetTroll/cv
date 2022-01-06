import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import type { NextPage, } from "next";
import type { ReactElement, } from "react";

const Row = ({ name = "", value = "", }: { name?: string; value?: string | ReactElement; },) => (
	<>
		<Grid item xs={2}>
			<Typography variant="body1">
				{name}
			</Typography>
		</Grid>
		<Grid item xs={10}>
			<Typography variant="body1">
				{value}
			</Typography>
		</Grid>
	</>
);

const HeaderRow = ({ name, }: { name: string; },) => (
	<Grid item xs={12}>
		<br />
		<Typography variant="h4">
			{name}
		</Typography>
	</Grid>
);

const Cv: NextPage = () => {
	return (
		<Box sx={{ flexGrow: 1, }}>
			<Grid container spacing={2}>
				<HeaderRow name="Om Meg" />
				<Row name="Navn" value="Luca Matei Pintilie" />
				<Row name="Address" value="Kinoveien 14, Sandvika" />

				<Row name="Mobil" value="46 23 55 43" />
				<Row name="E-post" value={<Link href="mailto:lucafulger@gmail.com">lucafulger@gmail.com</Link>} />
				<Row name="Fødselsdato" value="05. November 2004" />

				<HeaderRow name="Utdanning" />
				<Row name="2021" value="2021 Vg2 Bleiker VGS Informasjonsteknologi" />
				<Row name="2020" value="2020 Vg1 Bleiker VGS Informasjon og Media" />

				<HeaderRow name="Kompetanse" />
				<Row name="Software" value="Git, Linux, NGINX, Deno, Node.js" />
				<Row name="Programming" value="TypeScript / JavaScript, Python" />
				<Row name="Frameworks" value="Express,js, Next.js, React, Preact" />

				<HeaderRow name="Språk" />
				<Row name="Rumensk" value="Morsmål" />
				<Row name="Engelsk" />
				<Row name="Norsk" />
			</Grid>
		</Box>
	);
};

export default Cv;
