import React, { Component } from 'react';

import Headers from './Headers';
import Row from './Row';
import styles from '../styles/table.scss';
import data from '../data/data.json';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'name',
            people: data,
        };
        this.setSortBy = this.setSortBy.bind(this);
    }

    renderRows() {
        const { people } = this.state;
        return people.map((person, index) => <Row key={index} person={person} />);
    }

    setSortBy(e) {
        this.setState({ sortBy: e.target.innerHTML });
    }

    render() {
       const { people, sortBy } = this.state;
        return (
            <table className={'Table'}>
                <Headers
                    headers={Object.keys(people[0])}
                    setSortBy={this.setSortBy}
                />
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default Table;
