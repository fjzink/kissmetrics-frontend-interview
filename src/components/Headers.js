import React from 'react';
import styles from '../styles/table.scss';

function renderHeaders(headers) {
    return headers.map((header, index) => <th className={styles.header} scope="col" key={index}>{header}</th>);
}

const Headers = (props) => {
    return (
        <thead>
            <tr className={`Headers ${styles.header}`}>
                {renderHeaders(props.headers)}
            </tr>
        </thead>
    );
};

export default Headers;
