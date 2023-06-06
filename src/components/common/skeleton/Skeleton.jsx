import React from "react";
import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 30px;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
  background: linear-gradient(90deg, #f0f0f0 0px, #e5e5e5 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

const SkeletonText = styled.div`
  width: 70%;
  height: 12px;
  background: linear-gradient(90deg, #f0f0f0 0px, #e5e5e5 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

// const SkeletonWrapperForImage = styled.div`
//   position: relative;

//   width: 15vw;
//   height: 15vw;
//   padding-top: 100%;
// `;

// const SkeletonForImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(90deg, #f3f3f3 0px, #e5e5e5 50%, #f3f3f3 100%);
//   background-size: 200px 100%;
//   animation: ${skeletonAnimation} 2.5s infinite;
// `;

const SkeletonWrapperForImage = styled.div`
  display: flex;
`;

const SkeletonForImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f3f3f3 0px, #e5e5e5 50%, #f3f3f3 100%);
  background: linear-gradient(90deg, #f3f3f3 0px, #e5e5e5 50%, #f3f3f3 100%);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 2.5s infinite;
`;

const Skeleton = ({ type }) => {
  const COUNTER = 4;

  const FeedSkeleton = () => (
    <SkeletonContainer key={Math.random()}>
      <SkeletonImage />
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonContainer>
  );

  const ImageSkeleton = () => {
    return (
      <SkeletonWrapperForImage>
        <SkeletonForImage />
      </SkeletonWrapperForImage>
    );
  };

  if (type === "image") return <ImageSkeleton />;
  if (type === "feed")
    return Array.from({ length: COUNTER }).map((_, index) => (
      <FeedSkeleton key={index} />
    ));
};

export default Skeleton;
