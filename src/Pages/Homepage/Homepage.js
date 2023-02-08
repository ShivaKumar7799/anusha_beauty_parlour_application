import React from 'react'
import Cards from './Cards/Cards'
import QuiltedImageList from './Gallery/Gallery'
import NavBar from './NavBar/NavBar'
import AlignItemsList from './Reviews/Reviews'
import TimeLine from "./TimeLine/TimeLine"
import GoogleMap from './GoogleMap/GoogleMap'
import Footer from './Footer/Footer'
import './Homepage.css'

import Image1 from "../../Assets/Images/image1.jpg";

const cardsImages = [
  {
    id : 1,
    src : Image1,
    title : "image 1"
  },
  {
    id : 2,
    src : Image1,
    title : "image 1"
  },
  {
    id : 3,
    src : Image1,
    title : "image 1"
  },
  {
    id : 4,
    src : Image1,
    title : "image 1"
  },
  {
    id : 5,
    src : Image1,
    title : "image 1"
  },
  {
    id : 6,
    src : Image1,
    title : "image 1"
  },

]

function Homepage() {
  return (
    <div className="homepage" >
      <NavBar />
      <div className="image_gallery" >
        <div className="image_gallery_content" >
          <h1>Anusha Beauty parlour</h1>
          <p>
          beauty spa, beauty-salon, beauty-shop, salon de beaute, salon, hairdresser, beauty-parlour, hair-salon, hair-dressing establishment, hairdressing salon and spa.
          </p>
          <p>
          Munugode bypoll: K Chandrasekhar Rao wields poach gate to bomb BJP in last lap
          Secunderabad Cantonment Board road row: Plea with collector
          Secunderabad Cantonment Board road row: Plea with collector
          Hyderabad: Woman suffers 'beauty parlour stroke' after hair wash at salon
          Image used for representational purpose
          </p>
        </div>
        <div className="quiltedImageList" >
          <QuiltedImageList />
        </div>
      </div>
      <div className="TimeLine" >
        <TimeLine />
      </div>
      <div className="cards_layout" >
        {cardsImages.map((card,index) => <Cards src = {Image1} /> )}
      </div>
      <div className="reviews" >
        <AlignItemsList />
      </div>
      <div className="contactInformation" >
        <div>
          <h1>Contact Information</h1>
        </div>
        <div className="googleMap" >
          <GoogleMap />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Homepage