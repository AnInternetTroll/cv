import type { GetStaticProps, InferGetStaticPropsType, NextPage, } from "next";
import { parse, } from "node-html-parser";
import Project from "../components/project_home";
import projects from "../components/projects.json";
import config from "../next.config.js";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
	{ metadata, },
) => {
	return (
		<>
			<h1>
				Luca
			</h1>
			<img
				src={`${config.basePath}/luca.jpg`}
				width="100%"
				height="auto"
			/>
			<p>
				I'm a web developer based in Norway!
				<br />
				Here's some of the stuff I've done
			</p>
			{metadata.map((project: { [x: string]: string | undefined; },) => (
				<>
					<Project
						key={project["og:title"]}
						image={project["og:image"]}
						imageHeight={project["og:image:height"]}
						imageWidth={project["og:image:width"]}
						title={project["og:title"]}
						description={project["og:description"]}
						url={project["og:url"]}
					/>
					<br />
				</>
			))}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const responses = projects.map((link,) => fetch(link.url,).then((res,) => res.text()));
	const htmls = await Promise.all(responses,);
	return { props: { metadata: htmls.map(getMetadata,), }, };
};

function getMetadata(str: string,): Record<string, string> {
	const doc = parse(str,);
	const tags = doc.querySelectorAll("meta",);
	const output: { [x: string]: string; } = {};
	// @ts-ignore
	tags.forEach((tag,) =>
		tag.attributes?.property ? (output[tag.attributes?.property] = tag.attributes?.content) : undefined
	);
	return output;
}

export default Home;
