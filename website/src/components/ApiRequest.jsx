// @ts-check

import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import styles from './ApiRequest.module.css';

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
                        <Link href="/docs/getting-started#environments">BASE_URL</Link>
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
                            <CodeBlock language="js" showLineNumbers>
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
                                    <div className={styles.responseExample}>
                                        <CodeBlock language="js" showLineNumbers>
                                            {response.example}
                                        </CodeBlock>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
