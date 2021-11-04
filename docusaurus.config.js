// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "MakerGram Internship",
	tagline: "📖 Learn  🗣️ Share 🤝 Collaborate",
	url: "https://makergram.com/internship",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "makergram", // Usually your GitHub org/user name.
	projectName: "internship", // Usually your repo name.

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/main/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "MakerGram Internship",
				logo: {
					alt: "MakerGram Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Internship Logs",
					},
					{href: "https://makergram.com", label: "Website", position: "left"},
					{
						href: "https://makergram.com/community",
						label: "Community",
						position: "left",
					},
					{href: "https://makergram.com/blog", label: "Blog", position: "left"},
					{
						href: "https://github.com/makergram/internship",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Community",
						items: [
							{
								label: "Twitter",
								href: "https://twitter.com/maker_gram",
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/company/makergram",
							},
							{
								label: "Facebook",
								href: "https://fb.com/makergram",
							},
							{label: "Instagram", href: "https://instagram.com/maker_gram"},
							{
								label: "Telegram",
								href: "https://t.me/makergram",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Website",
								href: "https://makergram.com",
							},
							{
								label: "Community",
								href: "https://makergram.com/community",
							},
							{
								label: "Blog",
								href: "https://makergram.com/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/makergram",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} MakerGram. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
