import React, { useState } from 'react'
import InputForm from '../Elements/Input/Input'
import Button from '../Elements/Button/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FormRegister = () => {
      const[values, setValues] = useState({
            name: '',
            email: '',
            notelp: '',
            password: ''
      })
      const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/register', values)
            .then(res => console.log(res))
            .then(err => console.log(err));
      }
  return (
    <>
      <form onSubmit={handleSubmit} className='w-3/4 flex flex-col gap-3 mt-4'>
        <InputForm
              type="text"
              placeholder="John Doe"
              onChange={(e) => setValues({...values, name: e.target.value})}
        />
        <InputForm
              type="email"
              placeholder="John@example.com"
              onChange={(e) => setValues({...values, email: e.target.value})}
        />
        <InputForm
              type="text"
              placeholder="08xxxxxxx"
              onChange={(e) => setValues({...values, notelp: e.target.value})}
        />
        <InputForm
              type="password"
              placeholder="********"
              onChange={(e) => setValues({...values, password: e.target.value})}
        />
        <InputForm
              type="password"
              placeholder="********"
        />
        <Link to="/login">
          <Button className="mt-7">Daftar</Button>        
        </Link>
      </form>

    </>
  )
}

export default FormRegister