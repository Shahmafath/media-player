//rfce

import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container'>
      <div className='row align-items-center m-5'>
        <div className="col-lg-5">
          <h1>Welcome to <span className='text-info'> Media Player</span></h1>
          <p style={{ textAlign: 'justify' }}>Media Player App. will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities.</p>
          <Link to={'/home'} className='btn btn-outline-warning mt-5'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://cdn.dribbble.com/users/660830/screenshots/5641330/ezgif.com-video-to-gif__2_.gif" alt="no image" />
        </div>
      </div>
      <div className="features mb-5">
        <h3 className='text-center'>Features</h3>
        <div className='cards mt-5 d-flex justify-content-between'>
          {/* card 1 */}
          <Card className='text-white bg-dark' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'350px'} variant="top" src="https://cdn.pixabay.com/animation/2023/03/06/05/36/05-36-20-416_512.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
               User can upload, view and remove the videos
              </Card.Text>
            </Card.Body>
          </Card>
           {/* card 2 */}
           <Card className='text-white bg-dark' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'350px'} variant="top" src="https://biq.cloud/wp-content/uploads/2021/08/Keyword-Discovery.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
               User can categorize videos according to their preferences using drag and drop features 
              </Card.Text>
            </Card.Body>
          </Card>
           {/* card 3 */}
           <Card className='text-white bg-dark' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'350px'} variant="top" src="https://media.giphy.com/media/XZP2eyJQroePQWiJVE/giphy.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
               User are able to see the history of watched videos
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-5 border rounded align-items-center p-5">
        <div className="col-lg-5">
          <h2 className='text-danger mb-5'>Simple, Fast and Powerful</h2>
          <p style={{textAlign: 'justify'}}><span className='fs-3'>Play everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, facere? Est nesciunt, repellendus sint sed ab ducimus. Praesentium.</p>
          <p style={{textAlign: 'justify'}}><span className='fs-3'>Categorize Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt earum ullam illum ea exercitationem, ut voluptatibus?</p>
          <p style={{textAlign: 'justify'}}><span className='fs-3'>Watch History</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia beatae optio corporis ipsa necessitatibus ipsum explicabo quisquam. </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="853" height="480" src="https://www.youtube.com/embed/t0Q2otsqC4I" title="Tom &amp; Jerry | Tom &amp; Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
      </div>
    </div>
  )
}

export default LandingPage