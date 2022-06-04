import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPokemon} from '../redux/actions/actions'
import '../styles/Detail.css'
const Detail = () => {

    const params = useParams()
    let cont = 0
    const dispatch = useDispatch()
    const pokemon = useSelector((state) => state.pokemon)
    useEffect(() => {
        dispatch(getPokemon(params.id))
    }, [])


    return (
        <div>
            <Link to="/home">
                <div className="div-back-detail">
                    <button>Back</button>
                </div>
            </Link>
            {
                pokemon?.map(data => (
                    <div key={data.id} className="div-container-detail">
                        <div className="div-h3-detail">
                            <h3>{data.name}</h3>
                        </div>
                        <div className="div-img-detail">
                            <img src={data.image} alt="img-pokemon"/>
                        </div>
                        <div className="div-power">
                            <div>
                                <h5>LIFE: </h5>
                                <p>{data.life}</p>
                            </div>
                            <div>
                                <h5>ATTACK: </h5>
                                <p>{data.attack}</p>
                            </div>
                            <div>
                                <h5>DEFENSE: </h5>
                                <p>{data.defense}</p>
                            </div>
                            <div>
                                <h5>SPEED: </h5>
                                <p>{data.speed}</p>
                            </div>
                        </div>
                        <div className="div-heih-weit">
                            <div>
                                <h5>HEIGHT: </h5>
                                <p>{data.height}</p>
                            </div>
                            <div>
                                <h5>WEIGHT: </h5>
                                <p>{data.weight}</p>
                            </div>
                        </div>
                        <div className="div-types-detail">
                            <h5>TYPES</h5>
                            <ul >
                                {
                                    data.types?.map(e => (
                                        <li key={cont ++}>{e}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default Detail;