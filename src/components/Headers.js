import React from 'react';
import styles from '../styles/table.scss';

function renderHeaders(headers, sort) {
    return headers.map((header, index) => {
        return (
            <th
                onClick={sort}
                className={styles.header}
                scope="col"
                key={index}
            >
                {header}
            </th>
        );
    });
}

const Headers = (props) => {
    return (
        <thead>
            <tr className={`Headers ${styles.header}`}>
                {renderHeaders(props.headers, props.setSortBy)}
            </tr>
        </thead>
    );
};

export default Headers;
