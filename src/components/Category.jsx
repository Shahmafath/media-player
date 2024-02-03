import React, {useEffect, useState} from 'react'
import {Modal, Button, Form, FloatingLabel,Row, Col, Collapse} from 'react-bootstrap' 
import { addCategoryAPI, getCategoryAPI, getVideoAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard'
function Category({dropResponse}) {
  const [categoryName, setCategoryName] = useState("")
  const [allCategories, setAllCategories] = useState([])

  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if(categoryName){
      const result = await addCategoryAPI({categoryName, allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getAllCategories()
      }else{
        alert(result.message)
      }
    }else{
      alert("Please fill the form completely!")
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [dropResponse])

  const getAllCategories = async () => {
    const {data} = await getCategoryAPI()
    setAllCategories(data)
  }

  const removeCategory = async (id) => {
    await removeCategoryAPI(id)
    getAllCategories()
  }

  const dragOver = (e) => {
    console.log("Video card dragging over the category!");
    // to stop refreshing before it drop to category
    e.preventDefault()
  }
 
const videoDrop = async (e, categoryId) => {
  console.log("Video dropped!! Inside the category Id:"+categoryId);
  // to get video id from videocard
  const videoId = e.dataTransfer.getData("videoId")
  console.log("Video Id: " +videoId+ " dropped!! Inside the category Id:" +categoryId);
  // get video details from allAPI
  const {data} = await getVideoAPI(videoId)
  console.log(data);
  // get category id details
  const selectedCategory = allCategories.find(item => item.id === categoryId)
  console.log(selectedCategory);
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  await updateCategoryAPI(categoryId, selectedCategory)
  getAllCategories()
}
console.log((allCategories));

const videoDragStarted = (e, videoId, categoryId) => {
  let dataShare = {videoId, categoryId}
  e.dataTransfer.setData("data", JSON.stringify(dataShare))
}
 

  return (
    <>
     <div className='d-grid'>
        <Button className='btn btn-outline-light' onClick={handleShow}>
          Add New Category
        </Button>
     </div>

      {
        allCategories?.length>0?allCategories.map(category => (
          <div className="border rounded p-3 mt-2" droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e, category?.id)} >
            <div onClick={() => setOpen(!open)} className="d-flex justify-content-between align-items-center">
              <h6> {category?.categoryName} </h6>
              <button onClick={() => removeCategory(category?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Collapse in={open}>
              <Row>
                {
                  category?.allVideos?.length>0?category?.allVideos?.map(card => (
                    <Col draggable onDragStart={e => videoDragStarted(e, card.id, category.id)} sm={12} className='mb-2'>
                      <VideoCard video={card} insideCategory={true}/>
                    </Col>
                  )):null
                }
              </Row>
            </Collapse>
          </div>
        )):
        <p className='fw-bolder fs-4 text-primary mt-2'>No Categories are added yet!</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInputName" label="Category Name" className="mb-3">
            <Form.Control type="text" placeholder="Category Name" onChange={e => setCategoryName(e.target.value)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} className='btn btn-primary'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category