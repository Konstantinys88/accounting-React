import './employers-list-item.css'

const EmployersListItem = (props) => {

    const { name, salary, onDeleteItem, onToggleIncrease, onToggleLike, increase, like } = props;

    let classItem = "list-group-item d-flex justify-content-between";
    if (increase) {
        classItem += ' increase';
    }
    if (like) {
        classItem += ' like';
    }

    return (
        <li className={classItem}>
            <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDeleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployersListItem;