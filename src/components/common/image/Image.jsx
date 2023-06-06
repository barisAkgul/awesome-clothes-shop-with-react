import React, { useRef, useEffect, useState } from "react";
import Skeleton from "../skeleton/Skeleton";

const Image = ({ src, alt }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      {imageLoading && <Skeleton type="image" />}
      <img
        src={src}
        alt={alt}
        style={{ display: imageLoading ? "none" : "block" }}
        onLoad={handleImageLoad}
      />
    </>
  );
};

export default Image;
