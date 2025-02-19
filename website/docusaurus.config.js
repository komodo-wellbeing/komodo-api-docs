// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Used for code block syntax highlighting
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.palenight;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Komodo API',
    favicon: 'img/logo.png',

    url: 'https://komodo-wellbeing.github.io',
    baseUrl: '/komodo-api-docs',

    // GitHub pages deployment config.
    organizationName: 'komodo-wellbeing',
    projectName: 'komodo-api-docs.github.io',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Komodo API',
                logo: {
                    src: 'img/logo.png',
                },
                items: [{ to: '/docs', label: 'Docs', position: 'left' }],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        label: 'GitHub',
                        href: 'https://github.com/komodo-wellbeing/komodo-api-docs',
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Komodo Monitr Ltd.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
