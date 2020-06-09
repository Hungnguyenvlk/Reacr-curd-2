import React,{Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'
class AllPost extends Component{
    render(){
        const {posts} = this.props; 
        
        console.log(posts);
        return(
            <div className="all-post">
                <h1 className="post_heading">All Posts</h1>
                    {posts.map((post) => 
                        <div key = {post.id}>   
                            {(post.editing) ? <EditComponent key ={post.id} post={post}></EditComponent>
                            : <Post key ={post.id} post={post}></Post>}
                        </div>
                    )} 
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        posts :state.post
    }
}
export default connect(mapStatetoProps)(AllPost);