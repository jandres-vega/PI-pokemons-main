import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllPokemon, orderAttack, orderPokemon} from '../redux/actions/actions'
import CardPokemon from "../components/CardPokemon";
import {useState} from "react";
import Paginado from "../components/Paginado";

const ListPokemon = () => {

    const dispatch = useDispatch()
    const allPokemon = useSelector((state) => state.allPokemonHome)

    const [currenPage, setCurrenPage] = useState(1);
    const [pokeByPage, setGameByPage] = useState(12);
    const indexLastPoke = currenPage * pokeByPage;
    const indexPrimarPoke = indexLastPoke - pokeByPage;
    const currenPokes = allPokemon.slice(indexPrimarPoke, indexLastPoke);

    const [order1, setOrder] = useState('')


    useEffect(() => {
        dispatch(getAllPokemon())
    },[]);


    function handleOrder (e) {
        e.preventDefault();
        dispatch(orderPokemon(e.target.value))
        setOrder(e.target.value)
    }

    function handleOrderAttack(e) {
        e.preventDefault();
        dispatch(orderAttack(e.target.value))
        setOrder(e.target.value)
    }

    const paginado = (pageNumber) => {
        setCurrenPage(pageNumber);
    };

    return (
        <div>
            <div>
                <Paginado
                    pokeByPage={pokeByPage}
                    allPokemon={allPokemon.length}
                    paginado={paginado}
                />
            </div>
            <div>
                <label>Order by Alphabet: </label>
                <select onChange={(e) => handleOrder(e)}>
                    <option value="ascent">A - Z</option>
                    <option value="descent">Z - A</option>
                </select>
            </div>

            <div>
                <label>Order Attack</label>
                <select onChange={(e) => handleOrderAttack(e)}>
                    <option value="min-max">min - max</option>
                    <option value="max-min">max - min</option>
                </select>
            </div>
                {
                    currenPokes?.map(data => (
                        <Link to={`/detail/${data.id}`}
                            key={data.id}
                        >
                            <CardPokemon
                                key={data.id}
                                name={data.name}
                                image={data.image}
                                types={data.types}
                            />
                        </Link>
                    ))
                }


        </div>
    );
};

export default ListPokemon;