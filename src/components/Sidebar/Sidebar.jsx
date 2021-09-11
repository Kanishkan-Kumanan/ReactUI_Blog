import "./sidebar.css";

function Sidebar(){
   return(
     <div className="sidebar">
         <div className="sidebarItem">
           <span className="sidebarTitle">ABOUT ME</span>
           <img className="sidebarImg" src="B612_20191006_124813_059.jpg"
           alt=""
           />
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
         </div>
        
         <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
             <li className="sidebarListItem">Life</li>
             <li className="sidebarListItem">Music</li>
             <li className="sidebarListItem">Sports</li>
             <li className="sidebarListItem">Tech</li>
             <li className="sidebarListItem">Style</li>
           </ul>

           </div>

           <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW ME</span>
           <div className="sidebarSocial"> 
           <i className="sidebarIcon fab fa-facebook-square"></i>
           <i className="sidebarIcon fab fa-twitter-square"></i>
           <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>

           </div>

       </div>
   )
}

export default Sidebar;