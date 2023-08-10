import Chat from "./Chat";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Profile from "./Profile";
import "./style.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/profile" element={<Profile name="Beket" surname="Sagyndyk" contact="+7 777 777 77 77"/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
