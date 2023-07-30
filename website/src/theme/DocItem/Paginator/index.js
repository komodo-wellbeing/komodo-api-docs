import React from 'react';
/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export default function DocItemPaginator() {
    // Hide pagination on doc pages
    return <></>;
}
