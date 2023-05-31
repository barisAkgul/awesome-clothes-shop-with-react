import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { useStore } from "@stores/index";

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 3rem 1.5rem;
  text-align: center;
`;

const ErrorContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #fed7d7;
  color: #c53030;
  max-width: 28rem;
  margin: auto;
`;

const LoadingContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #f7fafc;
  color: #6b7280;
  max-width: 28rem;
  margin: auto;
`;

const SuccessContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.375rem;
  background-color: #f7fafc;
  max-width: 36rem;
  margin: auto;
`;

const SuccessTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #34d399;

  span {
    color: black;
  }
`;

const SuccessText = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: #6b7280;
`;

const SuccessPage = () => {
  const { clearShoppingCart } = useStore();

  const error = false;
  const data = "Data";

  const urlParams = new URLSearchParams(location.search);
  const session_id = urlParams.get("session_id");

  if (!session_id) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    if (session_id) {
      clearShoppingCart();
    }
  }, [session_id, clearShoppingCart]);

  return (
    <Container>
      {error ? (
        <ErrorContainer>
          <p className="text-lg">Sorry, something went wrong!</p>
        </ErrorContainer>
      ) : !data ? (
        <LoadingContainer>
          <p className="text-lg animate-pulse">Loading...</p>
        </LoadingContainer>
      ) : (
        <SuccessContainer>
          <SuccessTitle>
            <AiOutlineCheck />
            <span>Thanks for your order!</span>
          </SuccessTitle>
          <SuccessText>Check your inbox for the receipt.</SuccessText>
        </SuccessContainer>
      )}
    </Container>
  );
};

export { SuccessPage };
