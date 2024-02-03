//rfce

import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  // state shifting is done here, where 'add' and 'view' are siblings of parent 'home' and these siblings are sharing data
  // so make a state in parent 'home' and give the function state eg: <setUploadVideoResponse> to 'add' which shares the data to 'view' which makes it state name eg: <uploadVideoResponse>
  const [uploadVideoResponse, setUploadVideoResponse] = useState({})

  const [dropResponse, setDropResponse] = useState({})
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse = { setUploadVideoResponse} />
        </div>
        <Link to={'/history'} style={{textDecoration: 'none', color: 'Black', fontSize: '20px'}}>Watch History <i class="fa-solid fa-clock-rotate-left"></i></Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h2>All Uploaded Videos</h2>
          <View uploadVideoResponse = { uploadVideoResponse} setDropResponse={setDropResponse}/>
        </div>
        <div className="category col-lg-3">
          <Category dropResponse={dropResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home