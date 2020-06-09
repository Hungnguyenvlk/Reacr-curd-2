import React,{Component} from 'react'
import {connect} from 'react-redux'

class EditComponent extends Component{
    handelingEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newContent= this.getMessage.value;
        const data = {
            newTitle ,
            newContent,
        }
        this.props.dispatch({type : 'UPDATE_POST' , id : this.props.post.id ,data })
    }
    render(){
        return (
            <div className="post">
                <form className="form" onSubmit={this.handelingEdit}>
                    <input type="text" placeholder="Enter Post Title" 
                    ref={(input) => this.getTitle = input } defaultValue={this.props.post.title}
                    required/>
                        <br/>
                    <textarea rows="5" cols="28" placeholder="Enter Post Content" 
                    ref ={(input) => this.getMessage = input } defaultValue={this.props.post.content}
                    required/>
                        <br/>
                    <button> Update </button>
                </form>
            </div>
        )
    }
}
export default connect()(EditComponent)