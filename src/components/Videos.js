import React from "react";

const Videos = ({ video }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {video.map((item) => (
          <div className="mx-3 my-3">
            <img alt="" src={item.image}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default Videos;
