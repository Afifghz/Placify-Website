import React from 'react'
import InputForm from '../Elements/Input/Input'
import { Link } from 'react-router-dom'
import Button from '../Elements/Button/Button'

const FormLogin = () => {
  return (
    <>
         <form action="" className='w-3/4 flex flex-col gap-3 mt-4'>
            <InputForm
                type="email"
                placeholder="John@example.com"
            />
            <InputForm
                type="password"
                placeholder="********"
            />
            <div className='mt-1 text-end'>
                <span
                    className='body2-regular text-[#8C2AC8] cursor-pointer'
                    style={{
                    display: 'inline-block'
                    }}
                >
                    Lupa kata sandi?
                </span>
            </div>
            <div className='mt-3'>
                <Link to="/beranda">
                    <Button>Masuk</Button>        
                </Link>
            </div>
         </form>
    </>
  )
}

export default FormLogin