import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import {  useNavigate} from 'react-router-dom'

function Cart() {
  const navigate=useNavigate()
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
            {[1,1,1,1].map((item)=><CartItem />)}
            </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
<div className='border'>
<p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
<hr />
<div className='space-y-3 font-semibold '>
<div className='flex justify-between text-black pt-3 '>
<span>Price</span>
<span>$4965</span>
</div>

<div className='flex justify-between  pt-3 '>
<span>Discount</span>
<span className=' text-green-600'>-$4965</span>
</div>

<div className='flex justify-between pt-3 '>
<span>Delievery Charge</span>
<span className=' text-green-600'>Free</span>
</div>

<div className='flex justify-between  pt-3 font-bold mb-10' >
<span>Total Price</span>
<span className=' text-green-600'>$4965</span>
</div> 
<Button  onClick={handleCheckout} className='w-full mt-5' variant="contained"  sx={{px:"2.5rem",py:"1rem",bgcolor:'#9155fd'}}
              >
                  Checkout
                </Button>
</div>


</div>

</div>
        </div>


      </div>
  )
}

export default Cart