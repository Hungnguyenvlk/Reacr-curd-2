const axios = require('axios');
//get all posts 
const getPost = axios.get('https://5edefbf5e36dd000166c87a1.mockapi.io/api/v1/Posts',
                        {headers: {
                            'Content-Type': 'application/json',
                            'Accept' : 'application/json'
                        }}
);
let getDataPost = async () => {
    const getPost = await axios.get('https://5edefbf5e36dd000166c87a1.mockapi.io/api/v1/Posts',
                        {headers: {
                            'Content-Type': 'application/json',
                            'Accept' : 'application/json'
                        }});

    console.log("fgdfgsdf");
    console.log(getPost);
    return getPost
}



// let getDataPost = (params,callback) => {

//     axios.get('https://5edefbf5e36dd000166c87a1.mockapi.io/api/v1/Posts',{
//                 headers: {
//                             'Content-Type': 'application/json',
//                             'Accept' : 'application/json'
//                         }}).then((data)=>{
//                             return callback(null,data);
//                         }).catch((err)=>{
//                             return callback(err,null);
//                         });
//     // console.log("fgdfgsdf");
//     // console.log(getPost);
//     // return getPost
// }



//.then(response =>  console.log(response.data))
// .catch;
// create post 
//  new Promise(resolve,reject) 
// update post 

//delete post
//callback
//promise
//async await 

export default getDataPost;