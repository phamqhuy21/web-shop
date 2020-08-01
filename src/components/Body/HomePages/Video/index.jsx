import React from "react";
import "./index.css";

function index(props) {
  return (
    <div className="video">
      <iframe
        width="85%"
        height="100%"
        src="https://www.youtube.com/embed/BB5togX_gEc"
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default index;
