import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.scss';

const EmployersList = ({ data, onDeleteApp, onToggleIncrease, onToggleLike }) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem
                name={item.name}
                salary={item.salary}
                increase={item.increase}
                key={item.id}
                like={item.like}
                onDeleteItem={() => onDeleteApp(item.id)}
                onToggleIncrease={() => onToggleIncrease(item.id)}
                onToggleLike={() => onToggleLike(item.id)} />
        )
    });


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;