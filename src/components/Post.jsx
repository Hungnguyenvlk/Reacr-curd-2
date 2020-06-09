import React from 'react'
import {connect} from 'react-redux'
import {editPost,deletePost} from '../redux/actions/post.action'


const Post = ({post,test,dispatch}) => { 
    const {title, Content, id } = post;
    console.log(test);
    return(
        <div className="post">
            <h2 className="post_title"> {title} </h2>
            <p className="post_message"> {Content} </p>
            <div className="control-buttons">
            <button className="edit"
            onClick = {() => dispatch(editPost(id))}
            > EDIT </button>
            <button className="delete"
            onClick={() => dispatch(deletePost(id))}
            > DELETE </button>
            </div>
        </div>
        
    )
}

const mapStatetoProps = (state) => ({
    test : state.test
})
export default connect(mapStatetoProps)(Post)