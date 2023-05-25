import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Modal kapanma animasyonu tamamlandıktan sonra onClose işlevini çağır
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalContainer isOpen={isOpen} onClick={handleClose}>
      <ModalContent isOpen={isOpen} onClick={handleModalClick}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
