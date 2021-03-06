import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import {useSelector} from 'react-redux'
import {CircularProgress, Grid} from '@material-ui/core'


export default function Posts({currentId,setCurrentId}) {
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles()
    return(
        posts.length <= 0 ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map(post=>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}
