import type * as Preset from '@docusaurus/preset-classic';
import { Config } from '@docusaurus/types';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import { themes } from 'prism-react-renderer';

// Used for syntax block highlighting
const lightCodeTheme = themes.palenight;
const darkCodeTheme = themes.dracula;

const config: Config = {
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
            'classic', // preset-classic
            {
                docs: {
                    sidebarPath: 'sidebars.ts',
                    docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
                },
                theme: {
                    customCss: 'src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: 'rest-api',
                docsPluginId: 'classic', // preset-classic
                config: {
                    'rest-api': {
                        specPath: 'src/rest-api.yaml',
                        outputDir: 'docs/rest-api',
                        sidebarOptions: {
                            groupPathsBy: 'tag',
                        },
                        baseUrl: '/',
                        showSchemas: false,
                        hideSendButton: true,
                    } satisfies OpenApiPlugin.Options,
                },
            },
        ],
    ],

    themes: ['docusaurus-theme-openapi-docs'],

    themeConfig: {
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
    } satisfies Preset.ThemeConfig,
};

export default config;
