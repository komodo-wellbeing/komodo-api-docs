// @ts-check

import React from 'react';
import CodeBlock from '@theme/CodeBlock';

const COLORS = {
    blue: '#3DA2EB',
    green: '#2CDD9C',
    red: '#E63B19',
};

export default function ApiRequest({ type, url, headers, responses }) {
    const style = { border: `solid ${COLORS.blue} 4px`, borderRadius: 8, padding: 14 };
    const h1Style = { fontSize: 24 };
    const h2Style = { fontSize: 18 };
    const tagStyle = { padding: 4, borderRadius: 8 };

    return (
        <div style={style}>
            <h1 style={h1Style}>
                🚀 <span style={{ fontWeight: 'bold' }}>{type}</span> <span>https://api.komodowellbeing.com{url}</span>
            </h1>
            <h2 style={h2Style}>Headers</h2>
            <ul>
                {headers.map((header) => (
                    <li>
                        <span style={{ backgroundColor: COLORS.blue, ...tagStyle }}>{header.name}</span>{' '}
                        {header.description}
                    </li>
                ))}
            </ul>
            {responses.length > 0 && (
                <>
                    <h2 style={h2Style}>Responses</h2>
                    <ul>
                        {responses.map((response) => (
                            <li>
                                <span style={{ backgroundColor: COLORS[response.color], ...tagStyle }}>
                                    {response.status}
                                </span>
                                {response.description && ` ${response.description}`}
                                {response.example && (
                                    <CodeBlock language="json" showLineNumbers>
                                        {response.example}
                                    </CodeBlock>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
