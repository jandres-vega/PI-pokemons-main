import React from 'react';
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
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

function validateForm(form) {
    let errors = {}

    const expressionUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    const expressionNumber = /^[0-9]*(\.?)[0-9]+$/;

    if (!form.name){errors.name = "el campo name es requerido"}

    if(!form.image) {errors.image = "el campo imagen es requerido"}
    else if(!expressionUrl.test(form.image)) {errors.image = "el campo imagen debe ser una url"}

    if(!form.life) {errors.life = "el campo life es requerido"}
    else if(!expressionNumber.test(form.life)) {errors.life = "el campo life debe ser un numero"}

    if(!form.attack) {errors.attack = "el campo attack es requerido"}
    else if(!expressionNumber.test(form.attack)) {errors.attack = "el campo attack debe ser un numero"}

    if(!form.defense) {errors.defense = "el campo defense es requerido"}
    else if(!expressionNumber.test(form.defense)) {errors.defense = "el campo defense debe ser un numero"}

    if(!form.speed) {errors.speed = "el campo speed es requerido"}
    else if(!expressionNumber.test(form.speed)) {errors.speed = "el campo speed debe ser un numero"}

    if(!form.height) {errors.height = "el campo height es requerido"}
    else if(!expressionNumber.test(form.height)) {errors.height = "el campo height debe ser un numero"}

    if(!form.weight) {errors.weight = "el campo weight es requerido"}
    else if(!expressionNumber.test(form.weight)) {errors.weight = "el campo weight debe ser u numero"}

    return errors
}

const Form = () => {

    const dispatch = useDispatch()
    let cont = 0
    const types = useSelector((state) => state.allTypes)
    useEffect(() => {
        dispatch(getAllTypes())
    },[])

    const { form, errors, handleChange, handleSubmit, handleSelect} = useForm(initialForm, validateForm)
    console.log(form)

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
                <div className="div-error-name">
                    {errors.name && <p>{errors.name}</p>}
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
                <div className="div-error-image">
                    {errors.image && <p>{errors.image}</p>}
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
                <div className="div-error-life">
                    {errors.life && <p>{errors.life}</p>}
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
                <div className="div-error-attack">
                    {errors.attack && <p>{errors.attack}</p>}
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
                <div className="div-error-defense">
                    {errors.defense && <p>{errors.defense}</p>}
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
                <div className="div-error-speed">
                    {errors.speed && <p>{errors.speed}</p>}
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
                <div className="div-error-height">
                    {errors.height && <p>{errors.height}</p>}
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
                <div className="div-error-weight">
                    {errors.weight && <p>{errors.weight}</p>}
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