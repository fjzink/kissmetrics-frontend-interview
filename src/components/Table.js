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
    }

    renderRows() {
        const { people } = this.state;
        return people.map((person, index) => <Row key={index} person={person} />);
    }

    render() {
       const { people } = this.state;
        return (
            <table className={'Table'}>
                <Headers headers={Object.keys(people[0])} />
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default Table;
