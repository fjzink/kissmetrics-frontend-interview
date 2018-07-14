import React, { Component } from 'react';

import data from '../data/data.json';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'name',
            people: data,
        };
    }

    render() {
       const { people } = this.state;
        return (
            <div className="Table">
                {people[0].name}
            </div>
        );
    }
}

export default Table;
