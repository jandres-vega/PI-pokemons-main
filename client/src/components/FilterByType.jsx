import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllTypes, filterByType, getAllPokemon} from '../redux/actions/actions'
import "../styles/FilterByType.css"
const FilterByType = ({setCurrenPage}) => {

    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.allTypes)
    const allPoke = useSelector(state => state.allPokemonHome)
    useEffect(() => {
        dispatch(getAllTypes())
        dispatch(getAllPokemon())
    },[])

    const filter = allPoke.map(data => {
        return {
            name: data.name,
            types: data.types
        }
    })
    function handleTypes(e) {
        e.preventDefault()

        dispatch(filterByType(e.target.value))
        setCurrenPage(1)

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