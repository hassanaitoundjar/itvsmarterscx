import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { $ as $$MarkdownLayout } from '../chunks/MarkdownLayout_S1gFNAjp.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<p>Welcome to the IPTV Smarters website. These terms and conditions outline the rules and regulations for the use of our website.</p>\n<p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use IPTV Smarters if you do not agree to all of the terms and conditions stated on this page.</p>\n<h2 id=\"license\">License</h2>\n<p>Unless otherwise stated, IPTV Smarters and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>\n<p>You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>\n<h2 id=\"restrictions\">Restrictions</h2>\n<p>You are specifically restricted from all of the following:</p>\n<ul>\n<li>publishing any website material in any other media;</li>\n<li>selling, sublicensing, and/or otherwise commercializing any website material;</li>\n<li>publicly performing and/or showing any website material;</li>\n<li>using this website in any way that is or may be damaging to this website;</li>\n<li>using this website in any way that impacts user access to this website;</li>\n<li>using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;</li>\n<li>engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website;</li>\n<li>using this website to engage in any advertising or marketing.</li>\n</ul>\n<h2 id=\"disclaimer\">Disclaimer</h2>\n<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>\n<ul>\n<li>limit or exclude our or your liability for death or personal injury;</li>\n<li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\n<li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\n<li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\n</ul>\n<h2 id=\"variation-of-terms\">Variation of Terms</h2>\n<p>IPTV Smarters is permitted to revise these terms of service at any time as it sees fit, and by using this website you are expected to review these terms regularly.</p>\n<h2 id=\"contact-information\">Contact Information</h2>\n<p>If you have any questions about these terms, please contact us at <a href=\"mailto:contact@iptvsmarters.io\">contact@iptvsmarters.io</a>.</p>\n<p><em>Last updated: February 16, 2024</em></p>";

				const frontmatter = {"title":"Terms and Conditions","layout":"~/layouts/MarkdownLayout.astro","readingTime":2};
				const file = "/home/zerobug/website/itvsmarterscx/src/pages/terms.md";
				const url = "/terms";
				function rawContent() {
					return "   \n                             \n                                        \n   \n\nWelcome to the IPTV Smarters website. These terms and conditions outline the rules and regulations for the use of our website.\n\nBy accessing this website, we assume you accept these terms and conditions. Do not continue to use IPTV Smarters if you do not agree to all of the terms and conditions stated on this page.\n\n## License\n\nUnless otherwise stated, IPTV Smarters and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.\n\nYou may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.\n\n## Restrictions\n\nYou are specifically restricted from all of the following:\n\n- publishing any website material in any other media;\n- selling, sublicensing, and/or otherwise commercializing any website material;\n- publicly performing and/or showing any website material;\n- using this website in any way that is or may be damaging to this website;\n- using this website in any way that impacts user access to this website;\n- using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;\n- engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website;\n- using this website to engage in any advertising or marketing.\n\n## Disclaimer\n\nTo the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:\n\n- limit or exclude our or your liability for death or personal injury;\n- limit or exclude our or your liability for fraud or fraudulent misrepresentation;\n- limit any of our or your liabilities in any way that is not permitted under applicable law; or\n- exclude any of our or your liabilities that may not be excluded under applicable law.\n\n## Variation of Terms\n\nIPTV Smarters is permitted to revise these terms of service at any time as it sees fit, and by using this website you are expected to review these terms regularly.\n\n## Contact Information\n\nIf you have any questions about these terms, please contact us at [contact@iptvsmarters.io](mailto:contact@iptvsmarters.io).\n\n_Last updated: February 16, 2024_\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"license","text":"License"},{"depth":2,"slug":"restrictions","text":"Restrictions"},{"depth":2,"slug":"disclaimer","text":"Disclaimer"},{"depth":2,"slug":"variation-of-terms","text":"Variation of Terms"},{"depth":2,"slug":"contact-information","text":"Contact Information"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
