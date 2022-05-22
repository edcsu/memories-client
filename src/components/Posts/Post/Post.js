import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip } from "@material-ui/core";
import ThumbAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/EditRounded";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia 
                className={classes.media} 
                image={post.selectedFile} 
                title={post.title}
            />
            <div className={classes.overlay} >
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="medium" />
                </Button>
            </div> 
            <div className={classes.details}>
                {post.tags.map((tag) => {
                    return <Chip label={`#${tag}`}/>
                })}
            </div>
                <Typography 
                    className={classes.title} 
                    variant="h5" 
                    gutterBottom
                >
                    {post.title}
                </Typography>
            <CardContent>
                <Typography 
                    variant="body2"
                    color="textSecondary" 
                    component="p"
                    gutterBottom
                >
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))} >
                    <ThumbAltIcon fontSize="small" className={classes.iconMargin}/>                    
                    {` ${post.likeCount}`}
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small" />
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;