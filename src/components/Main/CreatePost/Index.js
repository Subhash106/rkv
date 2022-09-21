import React from "react";
import "./style.css";

const CreatePost = () => {
  return (
    <div className="create-post bg-white">
      <div className="create-post-input-box">
        <img
          src="../../../img/logo.jpg"
          alt="Profile Image"
          className="create-post-profile-image"
        />
        <input
          className="create-post-input"
          type="text"
          placeholder="Create a post"
        />
      </div>
      <div className="create-post-others"></div>
    </div>
  );
};

export default CreatePost;
