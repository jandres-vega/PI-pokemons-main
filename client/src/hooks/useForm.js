import {useState} from 'react'
import {useDispatch} from "react-redux";
import {creatPokemon} from '../redux/actions/actions'

export const useForm = (initialForm) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSelect = (e) => {
        setForm({
            ...form,
            types: [...form.types, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(creatPokemon(form))
        alert("pokemon creado")
    }

    return {
        form,
        handleChange,
        handleSubmit,
        handleSelect
    }
}