import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/table.scss';

function renderIcon(order) {
    if (order === 'descending') {
        return <FontAwesomeIcon icon={faSortDown} />;
    }
    return <FontAwesomeIcon icon={faSortUp} />;
}

function renderHeaders(headers, sort, sortBy, order) {
    return headers.map((header, index) => {
        return (
            <th
                className={styles.header}
                scope="col"
                key={index}
            >
                <span onClick={sort}>{header}</span>
                {header === sortBy ? renderIcon(order) : null}
            </th>
        );
    });
}

const Headers = (props) => {
    return (
        <thead>
            <tr className={`Headers ${styles.header}`}>
                {renderHeaders(props.headers, props.setSortBy, props.sortBy, props.sortOrder)}
            </tr>
        </thead>
    );
};

export default Headers;
