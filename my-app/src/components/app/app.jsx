import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.scss';

import { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Михаил Лермонтов', salary: 2000, increase: true, id: 1, like: true },
                { name: 'Лев Толстой', salary: 999, increase: true, id: 2, like: false },
                { name: 'Александр Пушкин', salary: 3200, increase: false, id: 3, like: false },
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const newArr = data.filter(item => item.id !== id)
            return {
                data: newArr
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++,
            like: false,
        }
        this.setState(({ data }) => {
            return {
                data: [...data, newItem]

            }
        })
    }

    onToggleIncrease = (id) => {
        // this.setState(({ data }) => {
        //     const index = data.findIndex(item => item.id === id);
        //     const old = data[index];
        //     const newItem = { ...old, increase: !old.increase };
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({ data }) => {
            const newArr = data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item
            })
            return {
                data: newArr
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({ data }) => {
            const newArr = data.map(item => {
                if (item.id === id) {
                    return { ...item, like: !item.like }
                }
                return item
            })
            return {
                data: newArr
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearchApp = (term) => {
        this.setState({ term: term })
    }

    filterApp = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'increase':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelectApp = (item) => {
        this.setState({ filter: item });
    }


    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        const visibleData = this.filterApp(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearchApp={this.onUpdateSearchApp} />
                    <AppFilter filter={filter} onFilterSelectApp={this.onFilterSelectApp}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDeleteApp={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike} />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;