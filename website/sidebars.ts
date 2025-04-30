import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import guides from './docs/guides/sidebar';
import restv1 from './docs/rest/v1/sidebar';

const sidebars: SidebarsConfig = {
    docs: {
        Introduction: ['introduction', 'getting-started', 'dictionary'],
        'REST API': [restv1],
        'Cube API (Deprecated)': ['cube', 'cube-auth', 'cube-meta', 'cube-load', 'cube-troubleshooting'],
        'Integration Guides': [guides],
    },
};

export default sidebars;
