import React from 'react'
import Cards from './Cards/Cards'
import QuiltedImageList from './Gallery/Gallery'
import './Homepage.css'
import NavBar from './NavBar/NavBar'
import AlignItemsList from './Reviews/Reviews'
import TimeLine from "./TimeLine/TimeLine"

function Homepage() {
  return (
    <div className='homepage' >
      <NavBar />
      <div className='image_gallery' >
        <div style={{width : "50%"}} >
          <h1>Anusha Beauty parlour</h1>
          <p>
          out Galaxy A23 5G’s #NoShakeCam, the coolest camera feature in town!
Munugode bypoll: K Chandrasekhar Rao wields poach gate to bomb BJP in last lap
HYDERABAD: A recent trip to the salon almost turned fatal for a 50-year-old woman from Hyderabad, who suffered a stroke while getting her hair washed before a haircut. Doctors treating her said that a key vessel supplying blood to the brain was pressed when she bent back her neck for the wash, causing the stroke.
Incidentally, such health scares - often termed as the "beauty parlour stroke syndrome" after it was first reported in the US in 1993 - have been reported in the past too, said city doctors, adding that similar cases are common among men walking into salons for a neck massage.
          </p>
          <p>
          Munugode bypoll: K Chandrasekhar Rao wields poach gate to bomb BJP in last lap
Secunderabad Cantonment Board road row: Plea with collector
Secunderabad Cantonment Board road row: Plea with collector
Hyderabad: Woman suffers 'beauty parlour stroke' after hair wash at salon
Image used for representational purpose
          </p>
        </div>
        <div>
          <QuiltedImageList />
        </div>
      </div>
      <div className='timeline' >
        <TimeLine />
      </div>
      <div className='cards_layout' >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className='reviews' >
        <AlignItemsList />
      </div>
    </div>
  )
}

export default Homepage