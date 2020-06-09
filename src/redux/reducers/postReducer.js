import getDataPost from '../../services/apiServices';

const initialState = getDataPost();
console.log( ` show : ${initialState}`);
const postReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.id)
        case 'EDIT_POST' : 
            return state.map(post => 
                (post.id === action.id ? {...post, editing : !post.editing} : post))
        case 'UPDATE_POST' : 
        return state.map(post => {
            if(post.id === action.id)
            {
                return{
                    ...post,
                    title : action.data.newTitle,
                    content : action.data.newContent,
                    editing : !post.editing 
                }
            }
            else return post
        })
        default :
        return state;
    }
}
export default postReducer
