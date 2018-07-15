import React from 'react';

function renderHeaders(headers) {
    return headers.map((header, index) => <th scope="col" key={index}>{header}</th>);
}

const Headers = (props) => {
    return (
        <thead>
            <tr className="Headers">
                {renderHeaders(props.headers)}
            </tr>
        </thead>
    );
};

export default Headers;
