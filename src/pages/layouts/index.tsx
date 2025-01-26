import { html } from "hono/html";

export const Layout = (props: { children?: any }) => {
	return html`<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
                    name="Description"
                    content="All about Rasio Atmaja social media links and highlight links"></meta>
                <meta
                    name="Keywords"
                    content="Rasio Atmaja, Rasio Ganang Atmaja, Social Media, Links"></meta>

                <meta property="og:url" content="https://links.rasio.dev" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Rasio Atmaja - Links" />
                <meta
                    property="og:description"
                    content="All about Rasio Atmaja social media links and highlight links"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="links.rasio.dev" />
                <meta property="twitter:url" content="https://links.rasio.dev" />
                <meta name="twitter:title" content="Rasio Atmaja - Links" />
                <meta
                    name="twitter:description"
                    content="All about Rasio Atmaja social media links and highlight links"
                />
                <meta name="twitter:site" content="@rasatmaja" />
                <meta name="twitter:creator" content="@rasatmaja" />
				<title>Rasio Atmaja - Links</title>
				<link
					rel="stylesheet"
					href="/tailwind.css"
				/>
                <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
		        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
			</head>
			<body class="max-w-md mx-auto p-5 bg-primary-dark text-gray-200 transition-colors duration-500">
				${props.children}
			</body>
		</html>`;
};
