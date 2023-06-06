import styled from "styled-components";
import backgroundImage from "@assets/slide-01.jpg";

export const HeroSectionContainer = styled.div`
  height: calc(100vh - 65px);
  background-image: url(${backgroundImage});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;

export const HeroSectionBody = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: var(--max-width);
  height: 100%;
  padding-left: 2rem;
`;

export const Content = styled.div`
  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 0.5rem;

    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
    animation-delay: 0.5s;
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: var(--text-dark);

    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
    animation-delay: 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    background-color: var(--text-dark);
    color: var(--white);
    padding: 0.75rem 2rem;
    font-size: 0.8rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    opacity: 0;
    transform: scale(0);
    animation: scaleIn 0.5s ease-in-out forwards;
    animation-delay: 1.5s;
  }

  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ImageSection = styled.div`
  position: relative;
  max-width: 500px;

  img {
    position: absolute;
    bottom: -5rem;
  }
`;
