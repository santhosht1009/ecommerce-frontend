import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
<Grid className='bg-black text-white text-center mt-10'
container
sx={{bgcolor: 'black',color: 'white',py:3}}
>
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5'  variant='h6' >Company</Typography>
<div><Button className='pb-5'  variant='h6' gutterBottom>AboutUs</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Blog</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Press</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Jobs</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Parterns</Button></div>
</Grid>
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5'  variant='h6' >Solutions</Typography>
<div><Button className='pb-5'  variant='h6' gutterBottom>Marketing</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Analytics</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Commerce</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Insights</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Support</Button></div>
</Grid>
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5'  variant='h6' >Documentation</Typography>
<div><Button className='pb-5'  variant='h6' gutterBottom>Guides</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Api Status</Button></div>

</Grid>

<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5'  variant='h6' >Legal</Typography>
<div><Button className='pb-5'  variant='h6' gutterBottom>Claim</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Privacy</Button></div>
<div><Button className='pb-5'  variant='h6' gutterBottom>Term</Button></div>

</Grid>
<Grid className='pt-20' item xs={12}>
<Typography component='p'  variant='body2' align='center' >
  &copy;2023 E-Commerce.All Rights Reserved

</Typography>
<Typography component='p'  variant='body2' align='center' >
 Made with Using React and SpringBoot

</Typography>
<Typography component='p'  variant='body2' align='center' >
 Developed By <Link href="#" color='inherit' underline='always'>
 Santhosh T
 </Link>

</Typography>
</Grid >



</Grid>


    </div>
  )
}

export default Footer