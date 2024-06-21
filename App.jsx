import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header"; 
import "./App.css"; 
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer"; 
import CreatePost from "./component/CreatePost";     
import PostList from "./component/PostList";   
import Postlistprovider from "./STORE/post-list-store";   
import { Postlist } from "./STORE/post-list-store"; 

function App() {
  const [selectedtab, setselectedtab]=useState("Home"); 
  return (
    <Postlistprovider>

    <div className="app-container">
      <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedtab ==='Home'? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
       
      
        <Footer></Footer>
      </div>
    </div>
    </Postlistprovider>
  );
}

export default App;
