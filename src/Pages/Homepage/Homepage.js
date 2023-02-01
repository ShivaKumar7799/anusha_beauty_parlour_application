import React from 'react'
import Cards from './Cards/Cards'
import QuiltedImageList from './Gallery/Gallery'
import NavBar from './NavBar/NavBar'
import AlignItemsList from './Reviews/Reviews'
import TimeLine from "./TimeLine/TimeLine"
import { makeStyles } from "@mui/styles"
import GoogleMap from './GoogleMap/GoogleMap'
import Footer from './Footer/Footer'

const useStyles = makeStyles({
  image_gallery : {
    marginTop: "20px",
    padding : "10px",
    '@media (min-width: 1000px)': {
        display: "flex",
        justifyContent: "space-evenly",
      }
  },
  homepage : {
    backgroundColor: "blanchedalmond",
  },
  cards_layout : {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    rowGap: "30px",
    '@media (max-width: 576px)': {
      width : "100%",
      display: "flex",
      flexDirection : "column",
      padding : "5%"
    }
  },
  reviews : {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  image_gallery_content : {
    float : "left",
    '@media (min-width: 1000px)': {
      width : "50%"
    }
  },
  contactInformation : {
  }
});

function Homepage() {
  const classes = useStyles()
  return (
    <div className={classes.homepage} >
      <NavBar />
      <div className={classes.image_gallery} >
        <div className={classes.image_gallery_content} >
          <h1>Anusha Beauty parlour</h1>
          <p>
          out Galaxy A23 5G’s #NoShakeCam, the coolest camera feature in town!
          Munugode bypoll: K Chandrasekhar Rao wields poach gate to bomb BJP in last lap
          </p>
          <p>
          Munugode bypoll: K Chandrasekhar Rao wields poach gate to bomb BJP in last lap
          Secunderabad Cantonment Board road row: Plea with collector
          Secunderabad Cantonment Board road row: Plea with collector
          Hyderabad: Woman suffers 'beauty parlour stroke' after hair wash at salon
          Image used for representational purpose
          </p>
        </div>
        <div className={classes.quiltedImageList} >
          <QuiltedImageList />
        </div>
      </div>
      <div className={classes.TimeLine} >
        <TimeLine />
      </div>
      <div className={classes.cards_layout} >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className={classes.reviews} >
        <AlignItemsList />
      </div>
      <div className={classes.contactInformation} >
        <div>
          <h1>Contact Information</h1>
        </div>
        <div className={classes.googleMap} >
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