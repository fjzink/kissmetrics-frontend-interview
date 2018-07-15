import React from 'react';

function renderRow(rowData) {
    const values = Object.values(rowData);
    return values.map((personData, index) => <td key={index}>{personData}</td>);
}

const Row = (props) => {
    return (
        <tr>{renderRow(props.person)}</tr>
    );
};

export default Row;
