import React from 'react';
import {useDispatch} from 'react-redux'
import {filterByDbApi} from '../redux/actions/actions'
const FilterByCreation = () => {

    const dispatch = useDispatch()

    function handleCreation(e) {
        e.preventDefault()
        dispatch(filterByDbApi(e.target.value))
    }

    return (
        <div>
            <label>Filter By creation: </label>
            <select onChange={(e) => handleCreation(e)}>
                <option value="db">dataBase</option>
                <option value="api">api</option>
            </select>
        </div>
    );
};

export default FilterByCreation;