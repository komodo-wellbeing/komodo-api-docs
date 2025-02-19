import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import restApiSidebar from './docs/rest-api/sidebar';

const sidebars: SidebarsConfig = {
    docs: {
        Introduction: ['introduction', 'getting-started', 'dictionary'],
        'REST API': [restApiSidebar],
        'Cube API (Deprecated)': ['cube', 'cube-auth', 'cube-meta', 'cube-load', 'cube-troubleshooting'],
    },
};

export default sidebars;
