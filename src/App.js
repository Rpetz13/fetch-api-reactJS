import React from "react";
// import axios from "axios";
import Post from "./pages/Post";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="background" style={{ marginTop: "-30px" }}>
        {/* Memanggil page Post */}
        <Post />
      </div>
    </>
  );
};

export default App;
