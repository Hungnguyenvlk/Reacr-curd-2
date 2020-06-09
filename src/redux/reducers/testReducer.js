import getPost from '../../services/apiServices';

const initialState = getPost;
const testReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        default:
            return state;
    }
}

export default testReducer;

