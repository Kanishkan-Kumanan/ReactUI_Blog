import "./singlePost.css";

function SinglePost(){

   return(
     <div className="singlePost"> 
           <div className="singlePostWrapper">
             <img src="https://wallpapermemory.com/uploads/183/scenic-wallpaper-1366x768-laptop-258568.jpg" alt="" className="singlePostImg"/>
             <h1 className="singlePostTitle">
             Lorem ipsum dolor sit amet
             <div className="singlePostEdit">
             <i className="singlePostIcon far fa-edit"></i>
             <i className="singlePostIcon far fa-trash-alt"></i>
             </div>
               </h1>

             <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Kanishkan</b></span>
              <span className="singlePostDate">1 hour ago</span>
             </div>
             <p className="singlePostDesc">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Sed libero enim sed faucibus turpis in eu mi. Lectus magna fringilla urna porttitor. Libero volutpat sed cras ornare. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Tellus in metus vulputate eu scelerisque. Est sit amet facilisis magna etiam tempor. Mauris ultrices eros in cursus turpis massa. Sagittis purus sit amet volutpat consequat mauris. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vitae congue eu consequat ac
               </p>
             </div> 
       </div>
   )
}

export default SinglePost;