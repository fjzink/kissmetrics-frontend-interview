import React, { Component } from 'react';

import Headers from './Headers';
import Row from './Row';
import styles from '../styles/table.scss';
import data from '../data/data.json';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            people: data,
        };
        this.setSortBy = this.setSortBy.bind(this);
    }

    renderRows() {
        const { people, sortBy } = this.state;
        return people.map((person, index) => <Row key={index} person={person} />);
    }

    setSortBy(e) {
        const newSort = e.target.innerHTML;
        this.setState({ sortBy: newSort });

        const { people } = this.state;
        let sorted = people.slice(0);
        sorted = sorted.sort((a, b) => {
            return this.sortAscending(a, b, newSort);
        });
        this.setState({ people: sorted });
    }

    sortAscending = (a, b, sort) => {
        const nameA = a[sort].toUpperCase();
            const nameB = b[sort].toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
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
