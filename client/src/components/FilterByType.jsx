import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllTypes, filterByType} from '../redux/actions/actions'
import "../styles/FilterByType.css"
const FilterByType = () => {

    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.allTypes)
    useEffect(() => {
        dispatch(getAllTypes())
    },[])

    function handleTypes(e) {
        e.preventDefault()
        dispatch(filterByType(e.target.value))
    }

    return (
        <div className="div-types">
            <label>Filter By Type: </label>
            <select onChange={(e) => handleTypes(e)} defaultValue="select">
                <option value="select" disabled={true}  >select</option>
                {
                    allTypes?.map(data => (
                        <option value={data.name} key={data.id}>{data.name}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default FilterByType;