import {useState} from 'react'
import {useDispatch} from "react-redux";
import {creatPokemon} from '../redux/actions/actions'

export const useForm = (initialForm, validate) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(validate(form))
    }
    const handleSelect = (e) => {

        if (form.types.includes(e.target.value)) {
            alert("no se pueden repetir types")
        }else {
            setForm({
                ...form,
                types: [...form.types, e.target.value]
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(form))
        if (Object.keys(errors).length === 0) {
            dispatch(creatPokemon(form))
            alert("pokemon creado")
            setForm({
                name: '',
                image: '',
                life: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                types: []
            })
        }else {
            alert("complete todos los campos")
        }
    }

    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleSelect,
    }
}