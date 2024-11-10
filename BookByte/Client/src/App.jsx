import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home.jsx";
import "./app.css";
import Buypage from "./components/Buysection/Buypage.jsx";
import Chatpage from "./components/Chatsection/Chatpage.jsx";
import Signup from './components/Homepage/Signup.jsx';
import CreateRoomForm from '../src/components/Chatsection/CreateRoomForm.jsx';
import TermsConditions from '../src/components/Chatsection/TermsConditions.jsx';
import ChatRoom from '../src/components/Chatsection/ChatRoom.jsx';
import PrivacyPolicy from '../src/components/Chatsection/PrivacyPolicy.jsx';
import HelpCenter from '../src/components/Chatsection/HelpCenter.jsx';
import Logout from '../src/components/Chatsection/Logout.jsx';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buypage" element={<Buypage />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat/create-room" component={CreateRoomForm} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/chat/chat-room" component={ChatRoom} />
        <Route path="/terms-conditions" component={TermsConditions} />
        <Route path="/chat/help-center" component={HelpCenter} />
        <Route path="/chat/logout" component={Logout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;