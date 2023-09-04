import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 46, heigth: 56, bgcolor: "#9155fd" }}
            >
              S
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Santhosh</p>
              <p className="opacity-70">September 03,2023</p>
            </div>
          </div>
          <Rating name="half-rating" value={4.5} readOnly precision={.5}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
