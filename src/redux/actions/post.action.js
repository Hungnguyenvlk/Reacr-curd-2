export const addPost = text =>({
    type : 'ADD_POST',
    text
})

export const deletePost = id =>({
    type : 'DELETE_POST',
    id
})

export const editPost = id =>({
    type : 'EDIT_POST',
    id
})

export const updatePost = (id,data) =>({
    type : 'EDIT_POST',
    id,
    data
})