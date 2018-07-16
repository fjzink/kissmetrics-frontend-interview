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
            sortOrder: 'ascending',
            people: data,
        };
        this.setSortBy = this.setSortBy.bind(this);
    }

    renderRows() {
        const { people, sortBy } = this.state;
        return people.map((person, index) => <Row key={index} person={person} />);
    }

    setSortBy(e) {
        const { sortBy, sortOrder, people } = this.state;
        const newSort = e.target.innerHTML;
        let newSortOrder = sortOrder;
        if (newSort === sortBy) {
            switch (sortOrder) {
                case 'ascending':
                    newSortOrder = 'descending';
                    this.setState({ sortOrder: newSortOrder });
                    break;
                case 'descending':
                    newSortOrder = 'ascending';
                    this.setState({ sortOrder: newSortOrder });
                    break;
                default:
                    break;
            }
        } else {
            newSortOrder = 'ascending';
            this.setState({ sortOrder: newSortOrder });
        }
        this.setState({ sortBy: newSort });

        let sorted = people.slice(0);
        sorted = sorted.sort((a, b) => {
            return this.sortPeople(a, b, newSort, newSortOrder);
        });
        this.setState({ people: sorted });
    }

    sortPeople = (a, b, sort, order) => {
        const nameA = a[sort].toUpperCase();
            const nameB = b[sort].toUpperCase();

            if (nameA < nameB) {
                if (order === 'descending') {
                    return 1;
                }
                return -1;
            }
            if (nameA > nameB) {
                if (order === 'descending') {
                    return -1;
                }
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
