import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { cloths } from "../../components/HomeSectionCarousel/Data";
function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
<HomeSectionCarousel data={cloths} sectionName={"men's kurtha"}/>
<HomeSectionCarousel data={cloths} sectionName={"men's Shoes"}/>
<HomeSectionCarousel data={cloths} sectionName={"men's Shirt"}/>
<HomeSectionCarousel data={cloths} sectionName={"Women's Saree"}/>
<HomeSectionCarousel data={cloths} sectionName={"Women's Dress"}/>

</div>
    </div>
  )
}

export default HomePage