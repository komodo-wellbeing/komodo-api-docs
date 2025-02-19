import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import restv1 from './docs/rest/v1/sidebar';

const sidebars: SidebarsConfig = {
    docs: {
        Introduction: ['introduction', 'getting-started', 'dictionary'],
        'REST API': [restv1],
        'Cube API (Deprecated)': ['cube', 'cube-auth', 'cube-meta', 'cube-load', 'cube-troubleshooting'],
    },
};

export default sidebars;
