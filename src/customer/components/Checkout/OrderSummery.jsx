import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

function OrderSummery() {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
<AddressCard/>

        </div>
        <div>
        <div className='lg:grid grid-cols-3  relative'>
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
<Button className='w-full mt-5' variant="contained"  sx={{px:"2rem",py:"1rem",bgcolor:'#9155fd'}}
              >
                  Add to Cart
                </Button>
</div>


</div>

</div>
        </div>


      </div>

    </div>
  )
}

export default OrderSummery