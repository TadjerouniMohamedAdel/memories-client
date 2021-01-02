import * as api from '../api'
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes'

//action creator

export const getPosts = ()=> async(dispatch) =>{
    try{
        const {data} =  await api.fetchPosts()
        dispatch({type:FETCH_ALL,value:data})
    }catch(error){
        console.log(error)
    }
}

export const createPost=  (post)=>async(dispatch)=>{
    try{
        const {data} = await api.createPost(post)
        dispatch({type:CREATE,value:data})
    }catch(error){
        console.log(error)
    }
}

export const updatePost=  (id,post)=>async(dispatch)=>{
    try{
        const {data} = await api.updatePost(id,post)
        dispatch({type:UPDATE,value:data})
    }catch(error){
        console.log(error)
    }
}

export const deletePost = (id)=>async (dispatch)=>{
    try{
        await api.deletePost(id)
        dispatch({type:DELETE,value:id})
    }   
    catch(error){
        console.log(error)
    }
}

export const likePost=  (id)=>async(dispatch)=>{
    try{
        const {data} = await api.likePost(id)
        dispatch({type:UPDATE,value:data})
    }catch(error){
        console.log(error)
    }
}