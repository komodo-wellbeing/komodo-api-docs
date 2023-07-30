// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Komodo API',
    favicon: 'img/logo.svg',

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
                    src: 'img/logo.svg',
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