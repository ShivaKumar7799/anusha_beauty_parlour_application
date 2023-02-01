import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  footerContainer : {
    textAlign : "center"
  }
})

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footerContainer} >
      <h1>Footer</h1>
    </div>
  )
}

export default Footer