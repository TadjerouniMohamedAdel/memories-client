import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes"

export default (posts = [],action) => {
    switch (action.type) {

    case FETCH_ALL:
        return action.value
    

    case CREATE:
        return [...posts,action.value]


    case UPDATE:
        console.log("UPDATE",action.value)
        return posts.map((post)=>post._id ===action.value._id ?action.value:post)
    
    
    case DELETE:
        return posts.filter((post)=>post._id !==action.value)
        
    
    default:
        return posts
    }
}
