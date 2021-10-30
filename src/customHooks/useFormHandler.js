import {useState} from 'react'


const useFormHandler = (initialState) => {
    const [formData, setFormData] = useState(initialState)


    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return { formData, changeHandler }
}

export default useFormHandler