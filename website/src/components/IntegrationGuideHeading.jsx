// @ts-check

import Heading from '@theme/Heading';
import styles from './IntegrationGuideHeading.module.css';

export default function IntegrationGuideHeading({ title, logo }) {
    return (
        <Heading
            as={'h1'}
            children={
                <div className={styles.heading}>
                    <img src={logo} />
                    {title}
                </div>
            }
        ></Heading>
    );
}
