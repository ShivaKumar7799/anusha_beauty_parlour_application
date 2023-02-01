import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  mapOuter : {
    width : "100%",
    padding : "10px"
  },
  gmap_canvas : {
    display : "flex",
    justifyContent : "center"
  },
  gmap_iframe : {
    width : "100%",
    height : "400px"
  }
})

function GoogleMap() {
  const classes = useStyles()
  return (
    <div class={classes.mapOuter}>
      {/* <div class={classes.gmap_canvas}>
        <iframe class={classes.gmap_iframe} title ="google_map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=&amp;height=400&amp;hl=en&amp;q=waddadi&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </div> */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16094.2264168706!2d82.86038180234877!3d17.85120444178794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3981ec7b61ecc5%3A0x16ffb94a6e09756f!2sSri%20Modamamba%20Digitals!5e0!3m2!1sen!2sus!4v1675280050357!5m2!1sen!2sus" width="100%" height="450" style={{border : "0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap