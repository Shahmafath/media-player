import { commonAPI } from "./commonAPI"
import { server_url } from "./serverURL"

// upload a video
export const uploadNewVideoAPI = async (video) => {
   return await commonAPI("POST", `${server_url}/allvideos`,video)
}

// get all videos
export const getAllVideosAPI =async () => {
    return await commonAPI("GET", `${server_url}/allvideos`, "")
}

// view single video ---- used for drag and drop
export const getVideoAPI = async (id) => {
    return await commonAPI("GET", `${server_url}/allvideos/${id}`, "")
}

// remove a video 
export const removeVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/allvideos/${id}`, {})
}

// insert video to history
export const addVideoToHistoryAPI = async (video) => {
    return await commonAPI("POST", `${server_url}/history`, video)
}

// get video from history
export const getHistoryVideosAPI =async () => {
    return await commonAPI("GET", `${server_url}/history`, "")
}

// remove video from history
export const removeHistoryVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/history/${id}`, {})
}

// add category
export const addCategoryAPI = async (category) => {
    return await commonAPI("POST", `${server_url}/categories`, category)
}

//get all category
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${server_url}/categories`, "")
}

// remove category
export const removeCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/categories/${id}`, {})
}

// update category
export const updateCategoryAPI = async (id, categoryDetails) => {
    return await commonAPI("PUT", `${server_url}/categories/${id}`, categoryDetails)
}


