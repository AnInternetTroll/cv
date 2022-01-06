import { FC, } from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface ProjectAttr {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	imageHeight?: number | string;
	imageWidth?: number | string;
}

const Project: FC<ProjectAttr> = ({ title, description, image, imageWidth, url, },) => {
	return (
		<Card>
			<CardActionArea href={url || ""}>
				<CardHeader
					title={title}
				/>
				<CardMedia
					component="img"
					width={imageWidth}
					image={image}
					alt={title}
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Project;
