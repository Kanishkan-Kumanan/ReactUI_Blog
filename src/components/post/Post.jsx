import "./post.css";

function Post(){

  return(
    <div className="post">
         <img className="postImg" src="https://lh3.googleusercontent.com/proxy/ogWkbbw7i1Yek5Z_R2vUqCTFuO4_ZU3vpzKhLDr_xJ9hFrnJ9MVAdn-H2gTLaP6hgQgmKbAo7TDxiDy4IxgNRs3MB9DFUjHE7dED_w=s0-d" alt="" />
      
       <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Music</span>
          </div>
          <span className="postTitle">
          Lorem ipsum dolor sit amet
             </span>
             <hr/>
          <span className="postDate">
            1 hour ago
          </span>

         </div>
         
         <p className="postDesc">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc pulvinar.Dictum sit amet justo donec enim diam. Sit amet cursus sit amet dictum sit amet justo donec. Lobortis elementum nibh tellus molestie. Praesent elementum facilisis leo vel fringilla est ullamcorper.
           </p>

      </div>
  )
}


export default Post;