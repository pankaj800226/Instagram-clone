
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header"
import Home from "./componentes/Home"
import { ToastContainer } from 'react-toastify';
import Profile from "./componentes/Profile";
import Post from "./componentes/Post";
import 'react-toastify/dist/ReactToastify.css';
import UserEdit from "./componentes/UserEdit";
//styles link import
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/profile.scss"
import "./styles/userProfile.scss"
import "./styles/post.scss"
import "./styles/UserProfileEdit.scss"
import "./styles/statusBar.scss"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/userEdit" element={<UserEdit />} />


      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
