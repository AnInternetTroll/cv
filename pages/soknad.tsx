import Typography from "@mui/material/Typography";

export default function Soknad() {
	return (
		<>
			<Typography variant="h2">Søknad</Typography>
			<Typography variant="body2">
				Jeg går på Bleiker VGS Informasjonsteknologi VG2
				<br />
				<br />
				Jeg ser etter praksisk plass og lærlingplass innefor faget.
				<br />
				<br />
				Jeg er veldig motivert når det gjelder både programvare og maskinvare innenfor IT. I fritiden min har
				jeg satt opp en Raspberry Pi 4 som en server tjensete, og jeg administrerer netverket i huset mitt, som
				hvilken DNS server vi bruker og hvem for hvilken IP addresser. Jeg har fått undervisning i JavaScript,
				CSS, HTML, Linux, og litt Windows Server (AD, DHCP, DNS) på skolen, og i fritiden min har jeg brukt
				TypeScript (+ React) og Python.
			</Typography>
			<img
				src="/grades.png"
				width="100%"
				height="auto"
			/>
		</>
	);
}
