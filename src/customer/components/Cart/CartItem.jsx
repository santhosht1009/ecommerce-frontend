import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from "@mui/material";
import React from "react";

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:h-[9rem] lg:w-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men's Slim Mid rise</p>
          <p className="opacity-70">Size:L,White</p>
          <p className="opacity-70 mt-2">Seller:F2f Fasion</p>
          <div className="flex space-x-5 items-center   text-gray-900 pt-6">
            <p className="font-semibold ">$500</p>
            <p className="line-through opacity-50">$1000</p>
            <p className="bg-green-600 font-semibold">50% off</p>
          </div>

          <div className="lg:flex items-center lg:space-x-10 pt-4">
<div className="flex items-center space-x-2">
<IconButton>
    <RemoveCircleOutlineIcon/>
</IconButton>
<span className="py-1 px-7 border rounded-sm">3</span>
<IconButton sx={{color:'RGB(145 85 253)'}}>
    <AddCircleOutlineIcon/>
</IconButton>  


</div>
<div>
<Button sx={{color:'RGB(145 85 253)'}}>remove</Button></div>
</div>


        </div>





      </div>
    </div>
  );
}

export default CartItem;
