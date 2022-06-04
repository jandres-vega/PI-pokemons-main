import React from 'react';
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import FilterByType from "../components/FilterByType";
import {useForm} from "../hooks/useForm";
import {getAllTypes} from '../redux/actions/actions'
import "../styles/Form.css"

const initialForm = {
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: []
}

const Form = () => {

    const dispatch = useDispatch()
    let cont = 0
    const types = useSelector((state) => state.allTypes)
    useEffect(() => {
        dispatch(getAllTypes())
    },[])

    const { form, handleChange, handleSubmit, handleSelect} = useForm(initialForm)

    return (
        <div>
            <div className="back-form">
                <Link to="/home">
                    <button>back Home</button>
                </Link>
            </div>
            <form className="div-form">
                <div className="div-name">
                    <label>Name: </label>
                    <input
                        value={form.name}
                        name="name"
                        type="text"
                        placeholder="add name pokemon"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-imagen">
                    <label>Image: </label>
                    <input
                        value={form.image}
                        name="image"
                        type="text"
                        placeholder="add an image"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-life">
                    <label>Life: </label>
                    <input
                        value={form.life}
                        name="life"
                        type="text"
                        placeholder="add life"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-attack">
                    <label>Attack: </label>
                    <input
                        value={form.attack}
                        name="attack"
                        type="text"
                        placeholder="add attack"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-defense">
                    <label>Defense: </label>
                    <input
                        value={form.defense}
                        name="defense"
                        type="text"
                        placeholder="add defense"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-speed">
                    <label>Speed: </label>
                    <input
                        value={form.speed}
                        name="speed"
                        type="text"
                        placeholder="add speed"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-height">
                    <label>Height: </label>
                    <input
                        value={form.height}
                        name="height"
                        type="text"
                        placeholder="add height"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-weight">
                    <label>Weight: </label>
                    <input
                        value={form.weight}
                        name="weight"
                        type="text"
                        placeholder="add Weight"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="div-types-form">
                    <label>Types: </label>
                    <select onChange={(e) => handleSelect(e)}>
                        {
                            types?.map((data) => (
                                <option value={data.name} key={cont++}>{data.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="div-send">
                    <button onClick={(e) => handleSubmit(e)}>send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;