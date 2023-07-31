// @ts-check

import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './ApiRequest.module.css';
import Link from '@docusaurus/Link';

const COLORS = {
    green: '#2CDD9C',
    red: '#E63B19',
};

const RESPONSE_STATUSES = {
    200: { label: 'Successful', color: COLORS.green },
    400: { label: 'Bad Request', color: COLORS.red },
    401: { label: 'Forbidden', color: COLORS.red },
};

export default function ApiRequest({ type, url, request, responses }) {
    return (
        <div className={styles.apiRequest}>
            <div className={styles.headingTag}>🚀 {type}</div>
            <div className={styles.contents}>
                <h1 className={styles.h1}>
                    <span className={styles.baseUrl}>
                        <Link href="/docs/environments">BASE_URL</Link>
                    </span>
                    {url}
                </h1>
                {request && (
                    <>
                        <h2 className={styles.h2}>Request</h2>
                        {request.headers && request.headers.length > 0 && (
                            <>
                                <h3 className={styles.h3}>Headers</h3>
                                <ul>
                                    {request.headers.map((header) => (
                                        <li>
                                            <span className={styles.blueTag}>{header.name}</span> {header.description}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {request.example && (
                            <CodeBlock language="json" showLineNumbers>
                                {request.example}
                            </CodeBlock>
                        )}
                    </>
                )}
                {responses && responses.length > 0 && (
                    <>
                        <h2 className={styles.h2}>Responses</h2>
                        {responses.map((response) => (
                            <div className={styles.response}>
                                <span
                                    style={{ backgroundColor: RESPONSE_STATUSES[response.status].color }}
                                    className={styles.tag}
                                >
                                    {response.status} {RESPONSE_STATUSES[response.status].label}
                                </span>
                                {response.description && ` ${response.description}`}
                                {response.example && (
                                    <CodeBlock language="json" showLineNumbers>
                                        {response.example}
                                    </CodeBlock>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
