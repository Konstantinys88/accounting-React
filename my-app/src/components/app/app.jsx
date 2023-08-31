import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.css';

import { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Егор Лиримеев', salary: 2000, increase: true, id: 1, like: false },
                { name: 'Олег Лунный', salary: 999, increase: false, id: 2, like: false },
                { name: 'Петр Пушкин', salary: 3200, increase: true, id: 3, like: false },
            ]
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
            name,
            salary,
            increase: false,
            id: this.maxId++,
            like: false,
        }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]

            }
        })
    }



    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList
                    data={this.state.data}
                    onDeleteApp={this.deleteItem} />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }


}

export default App;