import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: ""
  })
  console.log(uploadVideo);

  // https://www.youtube.com/watch?v=GBNfU14yyH4   ---link
  // https://www.youtube.com/embed/GBNfU14yyH4     ---embeded code
  const getEmbededlink = (e) => {
    const {value} = e.target
    //  value =  https://www.youtube.com/watch?v=GBNfU14yyH4
    if(value.includes("v=")){
      // it checks if v= is present in the link, to make sure
      let vID = value.split("v=")[1].slice(0,11)
      // value.split("v=") =  https://www.youtube.com/watch?, GBNfU14yyH4
      // [0] =  https://www.youtube.com/watch?v=   and  [1] = GBNfU14yyH4
      // slice(0,11) =  GBNfU14yyH4
      console.log(` https://www.youtube.com/embed/${vID}`); 
      setUploadVideo({...uploadVideo,link: `https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleUpload = async () => {
    // destructuring
    const {id, caption, url, link} = uploadVideo

    if(!id || !caption || !url || !link){
      alert("Uploading form is incomplete. Please fill the form completely!!")
    }else{
      // store uploadVideo in json server
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);

      // result.status>=200 && result.status<300 === success message
      if(result.status>=200 && result.status<300){
        // close the modal
        handleClose()
        // reset uploadVideo
        setUploadVideo({
          id: "", caption: "", url: "", link: ""
        })
        
         // share the result.data to 'view' component
         setUploadVideoResponse(result.data)
      }else{
        // if there is error it shows in message
        alert(result.message)
      }
    }
  }  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h3 className='text-dark'> Upload New Videos</h3>
        <button onClick={handleShow} className='btn text-dark'><i style={{ height: '40px' }} class="fa-solid fa-photo-film fa-2x"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Video Uploading Form</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please Fill the following details!

          <FloatingLabel controlId="floatingInputId" label="Enter Video ID" className="mb-3">
            <Form.Control type="text" placeholder="Enter Video ID" onChange={(e) => setUploadVideo({ ...uploadVideo, id: e.target.value})}/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputCaption" label="Enter Video Caption" className="mb-3">
            <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setUploadVideo({ ...uploadVideo, caption: e.target.value})}/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputImageUrl" label="Enter Video Image URL" className="mb-3">
            <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setUploadVideo({ ...uploadVideo, url: e.target.value})}/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputLink" label="Enter Youtube Video Link" className="mb-3">
            <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbededlink}/>
          </FloatingLabel>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add