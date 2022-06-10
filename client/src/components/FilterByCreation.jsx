import React from 'react';

import {useDispatch} from 'react-redux'
import {filterByDbApi} from '../redux/actions/actions'
import "../styles/FilterByCreation.css"
const FilterByCreation = ({setCurrenPage}) => {

    const dispatch = useDispatch()

    function handleCreation(e) {
        e.preventDefault()
        dispatch(filterByDbApi(e.target.value))
        setCurrenPage(1)
    }
    return (
        <div className="div-filter-creat">
            <label>Filter By creation: </label>
            <select onChange={(e) => handleCreation(e)}>
                <option value="all">All</option>
                <option value="db">dataBase</option>
                <option value="api">api</option>
            </select>
        </div>
    );
};

export default FilterByCreation;