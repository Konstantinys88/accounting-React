import './search-panel.scss';

import { Component } from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term:''
        }
    }

    onUpdateSearchPanel = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearchApp(term);
    }


    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника" 
                value={this.state.term}
                onChange={this.onUpdateSearchPanel}/>

        );
    }
}

export default SearchPanel;