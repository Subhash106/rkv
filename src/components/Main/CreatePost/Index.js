import React, { useState } from "react";
import Modal from "../../shared/Modal";
import "./style.css";

const CreatePost = () => {
  const [createPostModal, setCreatePostModal] = useState(false);
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
          onClick={() => setCreatePostModal(true)}
        />
      </div>
      {/* <div className="create-post-others">
        <ul>
          <li>Other Options to create post</li>
        </ul>
      </div> */}

      {createPostModal && (
        <Modal>
          <h1>Create a post</h1>
          <div>
            <textarea></textarea>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CreatePost;
