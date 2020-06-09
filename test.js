function getX(cba){
    setTimeout(function(){
        let x=10;
        return cba({},x);
    },1000)
    
}

function tinhtong(params,callback){
    // let {x,y} = params;
    let cb = (err,data)=>{
        let x = data;
        console.log(x);
    }
    getX(cb);
}
tinhtong();