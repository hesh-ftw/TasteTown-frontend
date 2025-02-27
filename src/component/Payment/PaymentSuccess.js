import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from '@mui/material';
import Card from '@mui/material/Card'; 
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';  

function PaymentSuccess() {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen px-5 '>
            <div className='flex flex-col items-center justify-center h-[90vh]'>
                <div className='box w-full lg:w-1/4 flex flex-col items-center rounded-md'>
                
                        <TaskAltIcon sx={{ fontSize: "5rem", color: green[500] }} />

                        <h1 className='py-5 text-2xl font-semibold'> Payment Success!</h1>
                        <p className='py-3 text-center text-gray-400'>Thank you for choosing our restaurant!  
                            Your order will arrive very soon...
                        </p>
                        <p className='py-2 text-center text-gray-400 text-lg'>Have a Great day!</p>

                        <Button onClick={() => navigate('/')} variant='contained' sx={{ margin: '1rem 0rem', background:'gray'}}>
                            Go To Home
                        </Button>
                        <Button onClick={()=>navigate('/my-profile/orders')} variant='contained' sx={{background:'gray'}}> See Orders </Button>

                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;
