import React,{Component} from 'react'
import {connect} from 'react-redux'

class PostForm extends Component{
    handelingSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const content = this.getMessage.value;
        const data = {
            id : new Date(),
            title,
            content,
            editing : false
        }
        this.props.dispatch({
            type : "ADD_POST",
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    };

    render(){
        return(
            <div className="post-container">
                  <h1 className="post_heading">Create Post</h1>
                <form className="form"  onSubmit={this.handelingSubmit}>
                    <input type="text" placeholder="Enter Post Title" 
                    ref={(input) => this.getTitle = input }
                    required/>
                        <br/>
                    <textarea rows="5" cols="28" placeholder="Enter Post Content" 
                    ref ={(input) => this.getMessage = input }
                    required/>
                        <br/>
                    <button> Post </button>
                </form>
            </div>
        )
    }
}
export default connect()(PostForm);