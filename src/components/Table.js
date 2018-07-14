import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { sort: 'name' };
    }

    render() {
       const { sort } = this.state;
        return (
            <div>
                {sort}
            </div>
        );
    }
}

export default Table;
