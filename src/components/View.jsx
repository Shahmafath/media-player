import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse, setDropResponse}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false)

  useEffect(() => {
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse, deleteVideoResponse])

  const getAllUploadedVideos = async () => {
    const result = await getAllVideosAPI()
    // result.status===200 == success message for GET
    if(result.status===200){
      console.log(result);
      // videos is stored in data
      setAllVideos(result.data)
    }else{
      console.log("API Failed!");
      // refersh
      setAllVideos([])
    }
  }

  const dragOver = (e) => {
    e.preventDefault()
  }

  const videoDropped = async (e) => {
    const {videoId, categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId, categoryId);
    const {data} = await getCategoryAPI()
    const selectedCategory = data.find(item => item.id == categoryId)
    let result = selectedCategory.allVideos.filter(video => video.id!=videoId)
    let {id, categoryName} = selectedCategory
    // after dropped, category details
    let newCategory = {id, categoryName, allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId, newCategory)
    setDropResponse(res)
  }

  return (
    <>
      <Row droppable={true} onDragOver={e => dragOver(e)} onDrop={(e) => videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video => (
            <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
            <VideoCard setDeleteVideoResponse = {setDeleteVideoResponse} video={video}/>
            </Col>
          )):
          <p className='fs-3 text-primary fw-bolder'>No Videos are uploaded yet!!</p>
        }
      </Row>
    </>
  )
}

export default View