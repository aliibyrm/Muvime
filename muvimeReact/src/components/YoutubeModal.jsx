import React from "react";
import ReactPlayer from "react-player";

const YoutubeModal = ({ isOpen, videoUrl, onClose }) => {
  return (
    isOpen && (
      <div className="youtube-modal">
        <div className="youtube-modal-content">
          <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default YoutubeModal;
