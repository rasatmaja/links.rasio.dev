import { html } from "hono/html";

export const Layout = (props: { title: string; children?: any }) => {
	return html`<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>${props.title}</title>
				<link
					rel="stylesheet"
					href="/tailwind.css"
				/>
			</head>
			<body>
				<header>
					<h1>
						<a href="/">Links</a>
					</h1>
				</header>
				${props.children}
				<footer>
					<p>Built with <a href="https://github.com/honojs/hono">Hono</a></p>
				</footer>
			</body>
		</html>`;
};
