import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

import "./errorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='errorPage'>
            <p id='back_home'>you need to see some goals to feel better?</p>
            <div>
                <Button onClick={() => { navigate('/') }} variant="outlined">Click here to go back home</Button>
            </div>
            <img src="https://st2.depositphotos.com/2268545/49125/v/450/depositphotos_491256822-stock-illustration-internet-network-warning-404-error.jpg" alt="404" />
        </div>
    )
}

export default ErrorPage