import React from 'react'
import './Cards.css'

function Cards({src}) {
  return (
      <div class="card">
        <img class="card-img-top" src={src} style={{width : "100%"}} alt="profile" />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
          <a href="www.google.com" class="btn btn-primary">See Profile</a>
        </div>
      </div>
  )
}

export default Cards