import './app-filter.scss';

const AppFilter = (props) => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-outline-light"
                type="button"
                key={'all'}
                onClick={() => props.onFilterSelectApp('all')}>
                    Все сотрудники
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                key='like'
                onClick={() => props.onFilterSelectApp('like')}>
                    На повышение
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                key='increase'
                onClick={() => props.onFilterSelectApp('increase')}>
                    З/П больше 1000$
            </button>

        </div>
    );
}

export default AppFilter;