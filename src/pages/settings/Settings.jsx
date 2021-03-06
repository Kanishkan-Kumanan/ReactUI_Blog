import "./settings.css";
import SideBar from "../../components/Sidebar/Sidebar";

function Settings(){

  return(
    <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
               
               <label>Profile Picture</label>
               <div className="settingsPP">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGAnFps4IwS0fhPUXWTAGy4PAVE7TKNbCZQ&usqp=CAU" alt=""/>
               <label htmlFor="fileInput">
                 
               <i className="settingsPPIcon far fa-user-circle"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
               
               </div>
               <label> Username </label>
               <input type="text" placeholder="Kanish"/>
               <label> Email </label>
               <input type="email" placeholder="kanish@gmail.com"/>
               <label> Password </label>
               <input type="password" />
               <button type="submit" className="settingsSubmit">Update</button>


            </form>
            
          </div>
      
      <SideBar />
      </div>
  )
}

export default Settings;