import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
function OrderDetail() {
  return (
    <div className="relative  top-3 px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1,1,1,1,1].map((item)=> <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men's Slim Jeans</p>
                <p className="space-x-5 text-xs opacity-50 font-semibold"><span>Color:Black</span><span>Size:M</span></p>
                <p>Seller:linaria</p>
                <p>$1099</p>
              </div>
            </div>
          </Grid>
<Grid item >
<Box sx={{color:deepPurple[500]}}>
<StarBorderIcon  sx={{fontSize:'2rem'}} className='px-2'/>
<span>Rate & Review Product</span>
</Box>

</Grid>

        </Grid>)}
       
      </Grid>
    </div>
  );
}

export default OrderDetail;
